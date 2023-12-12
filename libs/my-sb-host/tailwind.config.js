const { join } = require('path');
const sharedTailwindConfig = require('../my-tw-preset/src/lib/my-tw-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig.myTwPreset],
  content: [
    join('libs/my-pie/src/lib/!(*.stories|*.spec).{ts,html}'),
  ],
};
