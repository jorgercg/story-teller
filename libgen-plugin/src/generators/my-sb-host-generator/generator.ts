import { formatFiles, Tree } from '@nx/devkit';
import { libraryGenerator, UnitTestRunner } from '@nx/angular/generators';

import { MySbHostGeneratorGeneratorSchema } from './schema';

export async function mySbHostGeneratorGenerator(
  tree: Tree,
  options: MySbHostGeneratorGeneratorSchema
) {
  const projectRoot = `libs`;

  options.name = 'my-sb-host';
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

  await formatFiles(tree);
}

export default mySbHostGeneratorGenerator;