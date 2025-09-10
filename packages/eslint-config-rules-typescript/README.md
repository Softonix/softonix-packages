# @softonix/eslint-config-rules-typescript

TypeScript ESLint rules for Softonix projects, providing TypeScript-specific linting configurations.

## Installation

```bash
npm install @softonix/eslint-config-rules-typescript
# or
yarn add @softonix/eslint-config-rules-typescript
# or
pnpm add @softonix/eslint-config-rules-typescript
```

## Peer Dependencies

This package requires:
- `eslint`
- `typescript-eslint`

## Usage

```js
// eslint.config.js/ts
import { createTsRules } from '@softonix/eslint-config-rules-typescript'

export default [
  createTsRules()
]
```

## Included Rules

This configuration provides TypeScript-specific rules including:

- **Type Safety**: Disabled unsafe function types for flexibility
- **Unused Variables**: Error on unused vars with rest siblings ignore
- **Type Assertions**: Disabled unnecessary type assertions
- **Array Types**: Allow both `T[]` and `Array<T>` syntax
- **Promises**: Disabled floating promises requirement
- **Function Types**: Allow various empty function patterns
- **Any Type**: Disabled explicit any restriction
- **Naming Conventions**: Enforces prefixes for interfaces (I), types (T), and enums (E)

## Naming Convention Rules

- **Interfaces**: Must start with `I` (e.g., `IUser`, `IApiResponse`)
- **Type Aliases**: Must start with `T` (e.g., `TStatus`, `TConfig`)
- **Enums**: Must start with `E` (e.g., `EColor`, `EUserRole`)

## Rule Set Name

When used in configurations, this rule set is identified as `softonix-rules/typescript`.

## Override Example

```js
import { createTsRules } from '@softonix/eslint-config-rules-typescript'

export default [
  createTsRules(),
  {
    name: 'custom-overrides',
    rules: {
      '@typescript-eslint/no-explicit-any': 'error', // Disallow any type
      '@typescript-eslint/explicit-module-boundary-types': 'error' // Require return types
    }
  }
]
```

## File Targets

Applies to: `**/*.{js,ts,mts,tsx,vue}`

## License

MIT