import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/setup',
        'getting-started/faq',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/applications',
        'resources/commands',
        'resources/importing-applications',
      ],
    },
  ],
};

export default sidebars;
