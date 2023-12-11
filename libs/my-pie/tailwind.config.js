const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../bms-tw-preset/src/lib/bms-tw-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig.bmsTwPreset],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
