---
slug: introducing-child-workflows-in-laravel-workflow
title: "Introducing Child Workflows in Workflow"
authors:
  name: Richard
  title: Core Team
  url: https://github.com/rmcdaniel
  image_url: https://github.com/rmcdaniel.png
tags: [child-workflows, nesting]
---

import ThemedImage from '@site/src/components/ThemedImage';

Workflow (the Laravel-native durable workflow package) has introduced an exciting new feature called “Child Workflows.” This addition aims to enhance the organization and maintainability of complex processes by allowing developers to encapsulate sub-processes within a parent workflow. This article will discuss the benefits of using child workflows, their similarities with running a workflow as an activity, and their compatibility with retry and resume features.

What are Child Workflows?
=========================

In the Workflow package, child workflows are a way to manage complex processes by breaking them down into smaller, more manageable units. They enable developers to create hierarchical and modular structures for their workflows, making them more organized and easier to maintain. A child workflow is essentially a separate workflow that is invoked within a parent workflow using the `child()` helper function.

Benefits of Using Child Workflows
=================================

1.  Modularity: Child workflows promote modularity by allowing developers to encapsulate specific functionality within separate, reusable units. This enables better code organization and easier management of complex processes.
2.  Reusability: Child workflows can be invoked within multiple parent workflows, which encourages reusability and reduces code duplication.
3.  Maintainability: By breaking down complex processes into smaller units, developers can better understand, debug, and maintain their workflows.

Workflows as Activities
=======================

Child workflows are similar to running a workflow as an activity in that they both encapsulate specific functionality within a parent workflow. However, child workflows offer more flexibility and reusability than activities.

<ThemedImage
  lightSrc="https://mermaid.ink/img/pako:eNp1kl1rwjAUhv9KOOBdlTbaGnsx8Hu6DcYYDNbuImtTW2wTianOif99bYwoluUi5Jwn73tykhwhEjEDH5Jc7KOUSoXeRyFH1RgGr1QyrtCHkOsaf53zo2AYqWyXqQNyTGocLPhOrBkap1ke3wqMFWq3H9BIz-NLstVCzyxR6FtSHqW-0e6N1hhrySRo-NZwouHUwMahphrP7jE2eKbx_B53DZ5r_BhMeYxE8l9jVQ9v2Sq9NmGuLBJcZbxk29s2FkHjEAsNlkGj_FKDp0v55kuEHCxYySwGX8mSWVAwWdA6hGNtEYJKWcFC8KtlzBJa5iqEkJ8q2YbyTyGKi1KKcpWCn9B8W0XlJqaKTTK6kvS6hfGYybEouQLf6WoL8I_wU0We2_H6xO07BLv2gNieBQfwMfE6Xs_1yKCHbeJit3uy4FdXtTturzvAZIAdjLFHPGIBizMl5Mv5L-ovefoDcS7LIg?type=png"
  darkSrc="https://mermaid.ink/img/pako:eNp1kl1rwjAUhv9KOOBdFRttjLkY-D3dBmMMBmt3kbXRFm0iMdU58b-vxriJZbkIOefhfc85SQ4Qq0QAg_lK7eKUa4Ne-5FE5eqFz1wLadCb0ssT_jjn-2EvNtk2M3vku9QgnMqtWgo0SLNVci1wVqhev0N9uw8uyVoNPYq5QZ-ayzhlTrtzWmdsJcOw4nuCQwtHDlaaGlk8vsXY4bHFk1vccnhi8X04kglS8_8GK2d4yRbp3xDuymIlTSYLsbkeYxpWmphaMAsr5WcWPFzKV18ikuDBQmcJMKML4UEudM5PIRxOFhGYVOQiAlYeE66XEUTyWGrWXL4rlV9kWhWLFNicrzZlVKwTbsQw4wvN899sWTsReqAKaYCRwHoAO8AXMJ8EDdKhQcenOGh2aZN4sAeGKWmQdkBot42bNMBB6-jBty3bbATtVhfTLvYxxoQS6oFIMqP00_kn2g95_AGd-cox?type=png"
  lightLink="https://mermaid.live/edit#pako:eNp1kl1rwjAUhv9KOOBdlTbaGnsx8Hu6DcYYDNbuImtTW2wTianOif99bYwoluUi5Jwn73tykhwhEjEDH5Jc7KOUSoXeRyFH1RgGr1QyrtCHkOsaf53zo2AYqWyXqQNyTGocLPhOrBkap1ke3wqMFWq3H9BIz-NLstVCzyxR6FtSHqW-0e6N1hhrySRo-NZwouHUwMahphrP7jE2eKbx_B53DZ5r_BhMeYxE8l9jVQ9v2Sq9NmGuLBJcZbxk29s2FkHjEAsNlkGj_FKDp0v55kuEHCxYySwGX8mSWVAwWdA6hGNtEYJKWcFC8KtlzBJa5iqEkJ8q2YbyTyGKi1KKcpWCn9B8W0XlJqaKTTK6kvS6hfGYybEouQLf6WoL8I_wU0We2_H6xO07BLv2gNieBQfwMfE6Xs_1yKCHbeJit3uy4FdXtTturzvAZIAdjLFHPGIBizMl5Mv5L-ovefoDcS7LIg"
  darkLink="https://mermaid.live/edit#pako:eNp1kl1rwjAUhv9KOOBdFRttjLkY-D3dBmMMBmt3kbXRFm0iMdU58b-vxriJZbkIOefhfc85SQ4Qq0QAg_lK7eKUa4Ne-5FE5eqFz1wLadCb0ssT_jjn-2EvNtk2M3vku9QgnMqtWgo0SLNVci1wVqhev0N9uw8uyVoNPYq5QZ-ayzhlTrtzWmdsJcOw4nuCQwtHDlaaGlk8vsXY4bHFk1vccnhi8X04kglS8_8GK2d4yRbp3xDuymIlTSYLsbkeYxpWmphaMAsr5WcWPFzKV18ikuDBQmcJMKML4UEudM5PIRxOFhGYVOQiAlYeE66XEUTyWGrWXL4rlV9kWhWLFNicrzZlVKwTbsQw4wvN899sWTsReqAKaYCRwHoAO8AXMJ8EDdKhQcenOGh2aZN4sAeGKWmQdkBot42bNMBB6-jBty3bbATtVhfTLvYxxoQS6oFIMqP00_kn2g95_AGd-cox"
  alt="Child Workflows Diagram"
/>

Activities are single-purpose units that perform a specific action within a workflow, such as sending an email or updating a database record. On the other hand, child workflows are complete workflows in themselves, which can be composed of multiple activities and even other child workflows. This allows developers to create complex, nested structures to manage intricate processes more efficiently.

Retries and Resumes in Child Workflows
======================================

Child workflows inherit the same retry and resume features as their parent workflows, enabling developers to manage error handling and recovery more effectively. When a child workflow fails, Workflow will automatically attempt to retry the failed operation, following the configured retry policy. If the child workflow still fails after all retries have been exhausted, the parent workflow can also be configured to handle the failure accordingly.

In addition, child workflows can be resumed if they are interrupted due to a system failure or crash. This ensures that the entire process can continue from the point of interruption without losing progress or requiring manual intervention.

Conclusion
==========

Workflow’s Child Workflows feature offers developers an effective way to manage complex processes by breaking them down into smaller, more manageable units. This enhances organization, maintainability, and reusability, making it easier for developers to build and maintain intricate workflows. With the added benefits of retry and resume features, child workflows provide a robust and efficient solution for managing complex processes in Laravel applications.
