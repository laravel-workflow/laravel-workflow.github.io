const fs = require('fs');
const path = require('path');

const DOC_EXTS = new Set(['.md', '.mdx']);

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function isDocFile(p) {
  return DOC_EXTS.has(path.extname(p));
}

function extractFrontmatterAndContent(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''); // strip BOM
  // more tolerant: frontmatter is optional; allow \r\n
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: '', content: raw };
  return { frontmatter: match[1], content: match[2] };
}

function getSidebarPosition(frontmatter) {
  const m = frontmatter.match(/sidebar_position:\s*(\d+)/);
  return m ? parseInt(m[1], 10) : Infinity;
}

function getCategoryPosition(dirPath) {
  const categoryFile = path.join(dirPath, '_category_.json');
  if (!fs.existsSync(categoryFile)) return Infinity;
  try {
    const category = JSON.parse(fs.readFileSync(categoryFile, 'utf8'));
    return Number.isFinite(category.position) ? category.position : Infinity;
  } catch {
    return Infinity;
  }
}

function getPositionForItem(itemPath) {
  const stat = fs.statSync(itemPath);
  if (stat.isDirectory()) return getCategoryPosition(itemPath);
  if (isDocFile(itemPath)) {
    const { frontmatter } = extractFrontmatterAndContent(itemPath);
    return getSidebarPosition(frontmatter);
  }
  return Infinity;
}

function collectContent(rootDir, dirPath = rootDir) {
  const items = fs.readdirSync(dirPath).map(name => path.join(dirPath, name));

  const validItems = items.filter(p => {
    const stat = fs.statSync(p);
    return stat.isDirectory() || isDocFile(p);
  });

  validItems.sort((a, b) => {
    const pa = getPositionForItem(a);
    const pb = getPositionForItem(b);
    if (pa !== pb) return pa - pb;
    // deterministic tie-breaker
    return a.localeCompare(b);
  });

  let combined = '';

  for (const item of validItems) {
    const stat = fs.statSync(item);

    if (stat.isDirectory()) {
      combined += collectContent(rootDir, item);
      continue;
    }

    if (isDocFile(item)) {
      const { content } = extractFrontmatterAndContent(item);
      const rel = path.relative(rootDir, item).replace(/\\/g, '/');
      combined += `\n<!-- SOURCE: ${rel} -->\n`;
      combined += content.trimEnd() + '\n';
    }
  }

  return combined;
}

function main() {
  const docsDir = path.join(__dirname, '..', 'docs');
  const buildDir = path.join(__dirname, '..', 'build');
  const outputFile = path.join(buildDir, 'llms.txt');

  ensureDir(buildDir);

  const header = `# Durable Workflow – LLM Documentation Bundle
# Source: https://durable-workflow.com
# Generated from /docs
# Purpose: AI-assisted reasoning, code generation, and Q&A
# Canonical URL: https://durable-workflow.com/llms.txt

`;

  const combinedContent = collectContent(docsDir).trimStart() + '\n';
  const fullContent = header + combinedContent;
  fs.writeFileSync(outputFile, fullContent, 'utf8');

  console.log('llms.txt generated successfully:', outputFile);
}

main();
