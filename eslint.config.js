// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // extends: [
    //   "react-app",
    //   "react-app/jest"
    // ],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/ts/semi': ['warn', 'never']
    }
  }
)