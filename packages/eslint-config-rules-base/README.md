# @softonix/eslint-config-rules-base

Base ESLint flat configuration rules for JavaScript/TypeScript projects.

## Installation

```bash
pnpm add -D @softonix/eslint-config-rules-base
```

## Usage

### With ESLint Flat Config

```javascript
// eslint.config.js
import { createBaseRules } from '@softonix/eslint-config-rules-base'

export default [
  createBaseRules(),
  // ... your other configs
]
```

### With TypeScript

```typescript
// eslint.config.ts
import { createBaseRules } from '@softonix/eslint-config-rules-base'
import type { Linter } from 'eslint'

export default [
  createBaseRules(),
  // ... your other configs
] satisfies Linter.Config[]
```

## What's Included

This configuration provides foundational ESLint rules for:

- **Code Quality** - Prevents common JavaScript/TypeScript pitfalls
- **Best Practices** - Enforces modern JavaScript patterns  
- **Error Prevention** - Catches potential runtime errors
- **Consistency** - Maintains consistent code style across projects

## Rule Categories

- Variable declarations and scoping
- Function definitions and calls
- Object and array handling
- Control flow statements
- Modern ES6+ syntax usage
- Common anti-patterns prevention

## Extending the Config

You can extend or override rules:

```javascript
import { createBaseRules } from '@softonix/eslint-config-rules-base'

export default [
  createBaseRules(),
  {
    rules: {
      // Override any base rules
      'no-console': 'warn',
      'no-debugger': 'error'
    }
  }
]
```

## File Targets

Applies to: `**/*.{js,ts,mts,tsx,vue}`

## License

MIT