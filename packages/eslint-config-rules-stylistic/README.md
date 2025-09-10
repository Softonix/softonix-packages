# @softonix/eslint-config-rules-stylistic

Stylistic ESLint rules for Softonix projects, providing consistent code formatting and style rules.

## Installation

```bash
npm install @softonix/eslint-config-rules-stylistic
# or
yarn add @softonix/eslint-config-rules-stylistic
# or
pnpm add @softonix/eslint-config-rules-stylistic
```

## Peer Dependencies

This package requires:
- `@stylistic/eslint-plugin`
- `eslint`

## Usage

```js
// eslint.config.js/ts
import { createStylisticRules } from '@softonix/eslint-config-rules-stylistic'

export default [
  createStylisticRules()
]
```

## Included Rules

This configuration provides stylistic rules including:

- **Indentation**: 2 spaces with switch case indenting
- **Quotes**: Single quotes with escape avoidance
- **Semicolons**: No semicolons (ASI)
- **Spacing**: Consistent spacing around operators, brackets, and keywords
- **Line Breaks**: Unix line endings with proper newline handling
- **Brackets**: 1TBS brace style with object spacing
- **Commas**: No trailing commas, proper spacing
- **Type Annotations**: TypeScript-specific spacing rules

## Rule Set Name

When used in configurations, this rule set is identified as `softonix-rules/stylistic`.

## Override Example

```js
import { createStylisticRules } from '@softonix/eslint-config-rules-stylistic'

export default [
  createStylisticRules(),
  {
    name: 'custom-overrides',
    rules: {
      '@stylistic/indent': ['error', 4], // Use 4 spaces instead of 2
      '@stylistic/quotes': ['error', 'double'] // Use double quotes
    }
  }
]
```

## File Targets

Applies to: `**/*.{js,ts,mts,tsx,vue}`

## License

MIT