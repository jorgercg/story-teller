# My Tailwind Preset

[Back UP](../../README.md)

This is My Tailwind preset, which is to be used for My Apps.

## Usage

it is to be used in the `tailwind.config.js` file of My Apps, as such:

```javascript
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const { dirname } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@my/my-tw-preset').myTwPreset],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), 
    ...createGlobPatternsForDependencies(__dirname), 
    join(dirname(require.resolve('@my/my-button')), '*.mjs'), 
};
```

Note that it is necessary to add to the content section all the paths to the my components that are to be used in the app.
