const fs = require('fs');
const path = require('path');

function getPositionForItem(itemPath) {
  const stat = fs.statSync(itemPath);
  if (stat.isDirectory()) {
    const categoryFile = path.join(itemPath, '_category_.json');
    if (fs.existsSync(categoryFile)) {
      const category = JSON.parse(fs.readFileSync(categoryFile, 'utf8'));
      return category.position || Infinity;
    }
    return Infinity;
  } else if (itemPath.endsWith('.md')) {
    const { frontmatter } = extractFrontmatterAndContent(itemPath);
    return getSidebarPosition(frontmatter);
  }
  return Infinity;
}

function extractFrontmatterAndContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    return { frontmatter: '', content: content };
  }
  const frontmatter = frontmatterMatch[1];
  const body = frontmatterMatch[2];
  return { frontmatter, content: body };
}

function getSidebarPosition(frontmatter) {
  const match = frontmatter.match(/sidebar_position:\s*(\d+)/);
  return match ? parseInt(match[1], 10) : Infinity;
}

function collectContent(dirPath) {
  const items = fs.readdirSync(dirPath).map(item => path.join(dirPath, item));

  // Filter to directories and .md files
  const validItems = items.filter(item => {
    const stat = fs.statSync(item);
    return stat.isDirectory() || item.endsWith('.md');
  });

  // Sort by position
  validItems.sort((a, b) => getPositionForItem(a) - getPositionForItem(b));

  let combined = '';
  for (const item of validItems) {
    const stat = fs.statSync(item);
    if (stat.isDirectory()) {
      combined += collectContent(item);
    } else if (item.endsWith('.md')) {
      const { content } = extractFrontmatterAndContent(item);
      combined += content + '\n\n';
    }
  }

  return combined;
}

function main() {
  const docsDir = path.join(__dirname, '..', 'docs');
  const buildDir = path.join(__dirname, '..', 'build');
  const outputFile = path.join(buildDir, 'llms.txt');

  const combinedContent = collectContent(docsDir);

  fs.writeFileSync(outputFile, combinedContent, 'utf8');

  console.log('llms.txt generated successfully');
}

main();