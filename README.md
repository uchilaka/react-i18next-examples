# A demo of `react-i18next` with component interpolation

## Setting up ESLint

```shell
yarn add --dev eslint @eslint/js typescript typescript-eslint
```

## Setting up the style guide

```shell
# See https://eslint.style/packages/jsx for details on updating flat-style configs
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

emits errors in the eslint output of VSCode and doesn't seem to be working. Tried toggling over to the `CommonJS` format, but then what I believe to be the ESM-exclusive dependencies aren't imported (all that's within `@stylistic/eslint-plugin`).

#### When in ESM format

Outputs this error

```shell
(node:49356) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
Uncaught exception received.
/Users/uche/repos/sandbox/hello_i18next_react/eslint.config.js:3
import eslint from '@eslint/js';
^^^^^^
```
