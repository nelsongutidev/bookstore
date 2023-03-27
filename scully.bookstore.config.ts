import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

import '@scullyio/scully-plugin-puppeteer';
import 'prismjs/components/prism-java.js';
setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'bookstore',
  distFolder: './dist/bookstore', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder', // this is the type of route
      slug: {
        // this is the name of the property that will be used to create the slug
        folder: './blog',
      },
    },
  },
};
