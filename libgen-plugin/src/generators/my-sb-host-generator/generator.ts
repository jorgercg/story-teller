import { formatFiles, names, Tree, updateJson } from '@nx/devkit';
import { libraryGenerator, UnitTestRunner } from '@nx/angular/generators';
import { configurationGenerator } from '@nx/storybook/src/generators/configuration/configuration';
import { StorybookConfigureSchema } from '@nx/storybook/src/generators/configuration/schema';

import { MySbHostGeneratorGeneratorSchema } from './schema';

export async function mySbHostGeneratorGenerator(
  tree: Tree,
  options: MySbHostGeneratorGeneratorSchema
) {
  const projectRoot = `libs`;

  options.name = 'my-sb-host';
  options.buildable = true;
  options.addTailwind = true;
  options.standalone = true;
  options.style = 'none';
  options.prefix = 'my';
  options.flat = true;
  options.importPath = `@my/${options.name}`;
  options.selector = `${options.name}`;
  options.directory = projectRoot;
  options.unitTestRunner = UnitTestRunner.None;
  options.skipTests = true;

  await libraryGenerator(tree, options);

  const storybookConfig: StorybookConfigureSchema = {
    project: options.name,
    uiFramework: '@storybook/angular',
  };

  await configurationGenerator(tree, storybookConfig);

  updateJson(
    tree,
    `${projectRoot}/${options.name}/.storybook/tsconfig.json`,
    (tsConfigJson) => {
      tsConfigJson.exclude = ['../**/*.spec.ts', 'main.ts'];
      tsConfigJson.include = ['../../**/*.stories.ts', '*.ts'];
      return tsConfigJson;
    }
  );

  updateJson(
    tree,
    `${projectRoot}/${options.name}/project.json`,
    (projectJson) => {
      projectJson.targets['build-storybook'].options.styles = [
        `${projectRoot}/${options.name}/src/tailwind.css`,
      ];
      return projectJson;
    }
  );

  const newTailwindCss = `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap&');
  
  `;

  tree.write(`${projectRoot}/${options.name}/src/tailwind.css`, newTailwindCss);

  tree.delete(`${projectRoot}/${options.name}/tailwind.config.js`);

  const newTailwindConfig = `
  const { join } = require('path');
  const sharedTailwindConfig = require('../my-tw-preset/src/lib/my-tw-preset');

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    presets: [sharedTailwindConfig.myTwPreset],
    content: [],
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

  await formatFiles(tree);
}

export default mySbHostGeneratorGenerator;
