# @softonix/eslint-config-rules-base

Base ESLint rules for Softonix projects, providing core JavaScript/TypeScript linting rules.

## Installation

```bash
npm install @softonix/eslint-config-rules-base
# or
yarn add @softonix/eslint-config-rules-base
# or
pnpm add @softonix/eslint-config-rules-base
```

## Peer Dependencies

This package requires:
- `eslint`

## Usage

```js
// eslint.config.js/ts
import { createBaseRules } from '@softonix/eslint-config-rules-base'

export default [
  createBaseRules()
]
```

## Included Rules

This configuration provides core ESLint rules including:

- **Line Length**: Maximum 120 characters with smart ignores for URLs, strings, and templates
- **Escape Handling**: Disabled `no-useless-escape` for flexibility
- **Object Safety**: Disabled `no-prototype-builtins` for object property access
- **Array Callbacks**: Disabled `array-callback-return` requirement
- **Empty Blocks**: Allow empty catch blocks with `allowEmptyCatch: true`
- **Undefined Variables**: Disabled `no-undef` (handled by TypeScript)

## Rule Set Name

When used in configurations, this rule set is identified as `softonix-rules/base`.

## Override Example

```js
import { createBaseRules } from '@softonix/eslint-config-rules-base'

export default [
  createBaseRules(),
  {
    name: 'custom-overrides',
    rules: {
      'max-len': ['error', { code: 100 }] // Override line length
    }
  }
]
```

## File Targets

Applies to: `**/*.{js,ts,mts,tsx,vue}`

## License

MIT