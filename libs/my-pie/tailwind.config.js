const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
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
