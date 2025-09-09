# @softonix/eslint-config-rules-typescript

TypeScript-specific ESLint flat configuration rules for type-safe development.

## Installation

```bash
pnpm add -D @softonix/eslint-config-rules-typescript
```

## Usage

### With ESLint Flat Config

```javascript
// eslint.config.js
import { createTsRules } from '@softonix/eslint-config-rules-typescript'

export default [
  createTsRules(),
  // ... your other configs
]
```

### With TypeScript

```typescript
// eslint.config.ts
import { createTsRules } from '@softonix/eslint-config-rules-typescript'
import type { Linter } from 'eslint'

export default [
  createTsRules(),
  // ... your other configs
] satisfies Linter.Config[]
```

### Complete Setup with Base and Stylistic

```typescript
// eslint.config.ts
import { createBaseRules } from '@softonix/eslint-config-rules-base'
import { createStylisticRules } from '@softonix/eslint-config-rules-stylistic'
import { createTsRules } from '@softonix/eslint-config-rules-typescript'

export default [
  createBaseRules(),
  createStylisticRules(),
  createTsRules(),
  // ... your other configs
]
```

## What's Included

This configuration provides TypeScript-specific rules for:

- **Type Safety** - Enforce proper TypeScript usage and type checking
- **Interface & Type Definitions** - Best practices for type declarations
- **Generic Usage** - Proper generic constraints and usage patterns
- **Function Signatures** - Type-safe function definitions and calls
- **Class Definitions** - TypeScript class best practices
- **Module System** - Import/export with proper typing

## Rule Categories

- **Type Checking** - Rules that require type information
- **Type Assertions** - Safe type casting and assertions
- **Interface Design** - Clean interface and type definitions
- **Generic Constraints** - Proper generic usage
- **Function Typing** - Return types and parameter typing
- **Class Members** - Access modifiers and member definitions
- **Naming Conventions** - TypeScript-specific naming patterns

## Extending the Config

You can extend or override TypeScript rules:

```javascript
import { createTsRules } from '@softonix/eslint-config-rules-typescript'

export default [
  createTsRules(),
  {
    rules: {
      // Override any TypeScript rules
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
]
```

## File Targets

Applies to: `**/*.{js,ts,mts,tsx,vue}`

## Dependencies

This package uses [@typescript-eslint](https://typescript-eslint.io/) for comprehensive TypeScript linting support.

## Prerequisites

- TypeScript compiler (`typescript`)
- ESLint with TypeScript parser support

## License

MIT