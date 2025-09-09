import { defineConfig } from 'eslint/config'

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import { createBaseRules } from '@softonix/eslint-config-rules-base'
import { createStylisticRules } from '@softonix/eslint-config-rules-stylistic'
import { createTsRules } from '@softonix/eslint-config-rules-typescript'

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ['**/dist/**', '**/node_modules/**']
  },
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json', './packages/*/tsconfig.json']
      }
    }
  },
  createBaseRules(),
  createStylisticRules(),
  createTsRules()
)
