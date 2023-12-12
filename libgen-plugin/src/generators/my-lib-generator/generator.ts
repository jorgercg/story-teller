import { formatFiles, names, Tree } from '@nx/devkit';
import { libraryGenerator } from '@nx/angular/generators';
import { configurationGenerator } from '@nx/storybook/src/generators/configuration/configuration';
import { StorybookConfigureSchema } from '@nx/storybook/src/generators/configuration/schema';

import { MyLibGeneratorGeneratorSchema } from './schema';

export async function myLibGeneratorGenerator(
  tree: Tree,
  options: MyLibGeneratorGeneratorSchema
) {
  const projectRoot = `libs`;

  options.buildable = true;
  options.standalone = true;
  options.style = 'none';
  options.addTailwind = true;
  options.prefix = 'my';
  options.flat = true;
  options.importPath = `@my/${options.name}`;
  options.selector = `${options.name}`;
  options.directory = projectRoot;

  await libraryGenerator(tree, options);

  tree.delete(`${projectRoot}/${options.name}/tailwind.config.js`);

  const newTailwindConfig = `const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
  const { join } = require('path');
  const sharedTailwindConfig = require('../my-tw-preset/src/lib/my-tw-preset');
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    presets: [sharedTailwindConfig.myTwPreset],
    content: [
      join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
      ...createGlobPatternsForDependencies(__dirname),
    ],
  };
  `;

  tree.write(
    `${projectRoot}/${options.name}/tailwind.config.js`,
    newTailwindConfig
  );

  tree.delete(`${projectRoot}/${options.name}/README.md`);

  const newReadme = `# ${names(options.name).className}

  [Back UP](../../README.md)

  ## Properties

  | Name               | Description                              | Type                                                 | Default    |
  | ------------------ | ---------------------------------------- | ---------------------------------------------------- | ---------- |

  ## Usage

  `;

  tree.write(`${projectRoot}/${options.name}/README.md`, newReadme);

  const storybookConfig: StorybookConfigureSchema = {
    project: options.name,
    uiFramework: '@storybook/angular',
  };

  await configurationGenerator(tree, storybookConfig);

  await formatFiles(tree);
}

export default myLibGeneratorGenerator;
