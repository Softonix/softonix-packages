import type { Linter } from 'eslint'

export const createBaseRules = (): Linter.Config => ({
  name: 'softonix-rules/base',
  files: ['**/*.{js,ts,mts,tsx,vue}'],
  rules: {
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignorePattern: 'url\\('
    }],
    'no-undef': 'off',
    'no-useless-escape': 'off',
    'no-prototype-builtins': 'off',
    'array-callback-return': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }]
  }
})
