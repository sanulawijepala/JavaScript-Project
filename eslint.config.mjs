import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['src/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      'no-unused-vars': 'error'
    }
  }
]);
