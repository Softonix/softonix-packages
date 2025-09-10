# @softonix/eslint-config-vue

Vue.js ESLint configuration for Softonix projects, built on top of Vue TypeScript ESLint configuration with custom rule sets.

## Installation

```bash
npm install @softonix/eslint-config-vue
# or
yarn add @softonix/eslint-config-vue
# or
pnpm add @softonix/eslint-config-vue
```

## Usage

### Basic Usage

```js
// eslint.config.js/ts
import { defineSoftonixEslintConfig } from '@softonix/eslint-config-vue'

export default defineSoftonixEslintConfig()
```

### With Options

```js
// eslint.config.js/ts
import { defineSoftonixEslintConfig } from '@softonix/eslint-config-vue'
import eslintAutoImport from './.eslintrc-auto-import.json'

export default defineSoftonixEslintConfig({
  // Auto-imports configuration for global variables
  autoImports: eslintAutoImport,
  
  // Custom ignore patterns
  ignores: {
    extend: ['**/custom-ignore/**'],      // Add to default ignores
    override: ['**/dist/**', '**/build/**'] // Replace default ignores
  }
})
```

## FlatConfigComposer

This configuration returns a `FlatConfigComposer` instance, allowing you to further customize the configuration:

```js
import { defineSoftonixEslintConfig } from '@softonix/eslint-config-vue'

export default defineSoftonixEslintConfig()
  .append({
    // Add your custom rules here
    rules: {
      'custom-rule': 'error'
    }
  })
```

## Rule Set Configuration Names

This configuration includes several named rule sets that can be individually overridden:

### Base Rules (`softonix-rules/base`)
From `@softonix/eslint-config-rules-base` - Core ESLint rules

### Stylistic Rules (`softonix-rules/stylistic`) 
From `@softonix/eslint-config-rules-stylistic` - Code formatting and style rules

### TypeScript Rules (`softonix-rules/typescript`)
From `@softonix/eslint-config-rules-typescript` - TypeScript-specific linting rules  

### Vue Rules (`softonix-rules/vue`)
Vue.js framework-specific rules including:
- Component naming conventions
- Template formatting
- Vue directive usage
- Slot syntax preferences

### Override Examples

```js
import { defineSoftonixEslintConfig } from '@softonix/eslint-config-vue'

export default defineSoftonixEslintConfig()
  // Override base ESLint rules
  .override('softonix-rules/base', {
    rules: {
      'no-console': 'warn'
    }
  })
  // Override stylistic rules
  .override('softonix-rules/stylistic', {
    rules: {
      'indent': ['error', 4]
    }
  })
  // Override TypeScript rules
  .override('softonix-rules/typescript', {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  })
  // Override Vue rules
  .override('rules/vue', {
    rules: {
      'vue/multi-word-component-names': 'error'
    }
  })
```

## Default Ignores

The configuration includes these default ignore patterns:
- `**/public/**`
- `**/dist/**` 
- `**/dist-ssr/**`

You can extend or override these using the `ignores` option.

## Dependencies

This package includes and configures:
- Vue ESLint plugin
- TypeScript ESLint configuration for Vue
- Softonix base, stylistic, and TypeScript rule sets
- ESLint flat config utilities

## License

MIT