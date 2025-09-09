# @softonix/eslint-config-rules-stylistic

Stylistic ESLint flat configuration rules for consistent code formatting and style.

## Installation

```bash
pnpm add -D @softonix/eslint-config-rules-stylistic
```

## Usage

### With ESLint Flat Config

```javascript
// eslint.config.js
import { createStylisticRules } from '@softonix/eslint-config-rules-stylistic'

export default [
  createStylisticRules(),
  // ... your other configs
]
```

### With TypeScript

```typescript
// eslint.config.ts
import { createStylisticRules } from '@softonix/eslint-config-rules-stylistic'
import type { Linter } from 'eslint'

export default [
  createStylisticRules(),
  // ... your other configs
] satisfies Linter.Config[]
```

### Combined with Base Config

```typescript
// eslint.config.ts
import { createBaseRules } from '@softonix/eslint-config-rules-base'
import { createStylisticRules } from '@softonix/eslint-config-rules-stylistic'

export default [
  createBaseRules(),
  createStylisticRules(),
  // ... your other configs
]
```

## What's Included

This configuration provides stylistic rules for:

- **Code Formatting** - Consistent spacing, indentation, and line breaks
- **Bracket Style** - Standardized bracket placement and spacing
- **Quotes & Punctuation** - Consistent quote style and semicolon usage
- **Object & Array Style** - Formatting for object literals and arrays
- **Function Style** - Arrow functions, parameters, and return statements
- **Import/Export Style** - Consistent module declaration formatting

## Rule Categories

- **Spacing** - Indentation, padding, and whitespace rules
- **Brackets** - Brace style and bracket spacing
- **Punctuation** - Semicolons, commas, and quotes
- **Line Breaks** - Where to break lines for readability
- **Naming** - Variable and function naming conventions
- **Organization** - Code structure and ordering

## Extending the Config

You can extend or override stylistic rules:

```javascript
import { createStylisticRules } from '@softonix/eslint-config-rules-stylistic'

export default [
  createStylisticRules(),
  {
    rules: {
      // Override any stylistic rules
      '@stylistic/indent': ['error', 4], // Use 4 spaces instead of 2
      '@stylistic/quotes': ['error', 'double'] // Use double quotes
    }
  }
]
```

## File Targets

Applies to: `**/*.{js,ts,mts,tsx,vue}`

## Dependencies

This package uses [@stylistic/eslint-plugin](https://eslint.style/) for modern, maintainable stylistic rules.

## License

MIT