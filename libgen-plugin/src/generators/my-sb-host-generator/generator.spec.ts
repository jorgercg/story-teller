import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { mySbHostGeneratorGenerator } from './generator';
import { MySbHostGeneratorGeneratorSchema } from './schema';

describe('my-sb-host-generator generator', () => {
  let tree: Tree;
  const options: MySbHostGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await mySbHostGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
