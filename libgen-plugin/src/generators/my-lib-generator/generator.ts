import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import { libraryGenerator } from '@nx/angular/generators';
import { configurationGenerator } from '@nx/storybook/src/generators/configuration/configuration';

import * as path from 'path';

import { MyLibGeneratorGeneratorSchema } from './schema';
import { StorybookConfigureSchema } from '@nx/storybook/src/generators/configuration/schema';

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

  tree.delete(`${projectRoot}/tailwind.config.js`);

  tree.delete(`${projectRoot}/README.md`);

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    tmpl: '',
    name: options.name,
  });

  const storybookConfig: StorybookConfigureSchema = {
    project: options.name,
    uiFramework: '@storybook/angular',
  };

  await configurationGenerator(tree, storybookConfig);

  await formatFiles(tree);
}

export default myLibGeneratorGenerator;
