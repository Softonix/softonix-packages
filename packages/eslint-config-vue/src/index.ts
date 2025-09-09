import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { Linter } from 'eslint'

import { createBaseRules } from '@softonix/eslint-config-rules-base'
import { createStylisticRules } from '@softonix/eslint-config-rules-stylistic'
import { createTsRules } from '@softonix/eslint-config-rules-typescript'

const createVueRules = (): Linter.Config => ({
  name: 'softonix-rules/vue',
  files: ['**/*.{js,ts,mts,tsx,vue}'],
  rules: {
    'vue/block-lang': 'off',
    'vue/object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/attribute-hyphenation': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below'
    }],
    'vue/v-slot-style': ['error', {
      atComponent: 'shorthand',
      default: 'shorthand',
      named: 'shorthand'
    }]
  }
})

export function defineSoftonixEslintConfig (options: {
  autoImports?: any
  ignores?: { extend?: string[]; override?: string[] }
} = {}): FlatConfigComposer<any> {
  const { autoImports, ignores } = options

  const defaultIgnores = [
    '**/public/**',
    '**/dist/**',
    '**/dist-ssr/**',
    ...(ignores?.extend || [])
  ]

  return new FlatConfigComposer(...defineConfigWithVueTs(
    globalIgnores(ignores?.override || defaultIgnores),
    vueTsConfigs.recommended,
    vueTsConfigs.stylistic,
    pluginVue.configs['flat/recommended'],
    {
      files: ['**/*.{js,ts,mts,tsx,vue}'],
      languageOptions: {
        ...(autoImports || {}),
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
          parser: '@typescript-eslint/parser'
        }
      }
    },
    createBaseRules(),
    createStylisticRules(),
    createTsRules(),
    createVueRules()
  ))
}
