# A demo of `react-i18next` with component interpolation

This demo was setup to implement locale translation & interpolation with the `react-i18next` library.

## Getting started

You can review these to get started - or skip them all and just look at the project code 😉. Tip: start at `./src/components/LegalTerms`.

> I found thinking about how they could all come together to `do the thing` that I needed in my project and found the best way to groc it for myself was to get in there. So I did... then thought I'd share so perhaps you don't have to 🤞🏾

- [Quick start](https://react.i18next.com/guides/quick-start)
- [Interpolation](https://www.i18next.com/translation-function/interpolation)
- [Trans Component](https://react.i18next.com/latest/trans-component)

## What's all this with the "Future demos"?

While working on this demo project, I got pretty confused trying to get the new ESLint config format to play nice with VSCode 🙈. I have some (re-)learning to do about ESM modules (like, it works out of "the box" with react and I guess I've gone this long not fully understanding what it takes to make `import` work in a JS file 🤷🏾‍♂️).

Anways... the "Future Projects" will be a spot for all the work that happens over time to keep this project current. Like a "time lapse in code" sorta thing that I intend as a journey for myself and anyone else who follows along with this contrived project 😜

## Setting up ESLint

```shell
yarn add --dev eslint @eslint/js typescript typescript-eslint
```

## Setting up the `@stylistic` rules

```shell
# See https://eslint.style/packages/default for details on available flat-config stylistic rules
yarn add -D @stylistic/eslint-plugin-jsx
```

## Future demos

### ESLint flat config style compatibility with VSCode

> `yarn lint` works just fine - so the project itself is compatible with [the latest flat config changes](https://eslint.org/docs/latest/use/configure/configuration-files-new).

Here's the progress so far on composing the flat version of the config file for [setting up typescript-eslint with the new config format](https://typescript-eslint.io/getting-started#quickstart).

```js
//// eslint.config.js
// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // TODO: This isn't setup correctly yet
    // extends: [
    //   "react-app",
    //   "react-app/jest"
    // ],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/semi': ['warn', 'never']
    }
  }
)
```

This configuration follows [the setup guide](https://typescript-eslint.io/getting-started#quickstart)

#### When in CommonJS format

emits errors in the eslint output of VSCode and doesn't seem to be working. Tried toggling over to the `CommonJS` format, but then what I believe to be the ESM-exclusive dependencies aren't imported (i.e. the stuff we're importing from within `@stylistic/eslint-plugin`).

#### When in ESM format

Outputs this error

```shell
(node:49356) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
Uncaught exception received.
/Users/uche/repos/sandbox/hello_i18next_react/eslint.config.js:3
import eslint from '@eslint/js';
^^^^^^
```
