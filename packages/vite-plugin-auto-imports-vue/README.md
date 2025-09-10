# @softonix/vite-plugin-auto-imports-vue

A unified Vite plugin that combines auto-imports for scripts, components, and icons with extend/override configuration support.

## Features

- 🚀 **Auto-import scripts**: Composables, stores, services, and utilities
- 🧩 **Auto-import components**: Vue components with glob patterns  
- 🎨 **Auto-import icons**: File system icons with custom collections
- ⚙️ **Extend by default**: Configuration extends defaults, use `override` key when needed
- 📦 **All-in-one**: Single plugin replaces multiple unplugin packages

## Installation

```bash
npm install @softonix/vite-plugin-auto-imports-vue
# or
pnpm add @softonix/vite-plugin-auto-imports-vue
```

## Quick Start

```ts
// vite.config.ts
import { SoftonixAutoImportsVue } from '@softonix/vite-plugin-auto-imports-vue'

export default defineConfig({
  plugins: [
    SoftonixAutoImportsVue()
  ]
})
```

## Configuration

### Extending Configuration (Default Behavior)

All arrays extend the default configuration by default:

```ts
SoftonixAutoImportsVue({
  scripts: {
    dirs: ['./src/utils'],     // Extends default directories
    imports: ['vue-i18n']      // Extends default imports (vue, vue-router, etc.)
  },
  components: {
    globs: ['./src/widgets/**/*.vue'] // Extends default component globs
  }
})
```

### Overriding Configuration

Use the `override` key to replace defaults completely:

```ts
SoftonixAutoImportsVue({
  scripts: {
    dirs: { override: ['./src/my-composables'] },       // Replaces all default dirs
    imports: { override: ['vue-i18n'] }                 // Replaces all default imports
  },
  components: {
    globs: { override: ['./src/components/**/*.vue'] } // Replaces all default globs
  }
})
```

### Disable Plugins

```ts
SoftonixAutoImportsVue({
  scripts: { enabled: false },   // Disable auto-import scripts
  components: { enabled: false }, // Disable auto-import components and icons
  icons: { enabled: false }       // Disable icons
})
```

## Default Configurations

### Scripts (Auto-imports)
- **Directories**:
  - `./src/**/*.store.ts`
  - `./src/**/*.service.ts`
  - `./src/composables`
  - `./src/**/composables`
- **Imports**:
  - `vue`
  - `vue-router`
  - `@vueuse/core`
  - `pinia`
- **Output**: `./dts/auto-imports.d.ts`

### Components
- **Globs**:
  - `./src/components/**/*.vue`
  - `./src/views/**/components/**/*.vue`
- **Output**: `./dts/components.d.ts`
- **Icons**: Enabled by default with custom icon resolver

### Icons
- **Compiler**: Vue 3
- **Collections**: File system loader from `./src/assets/icons`

## TypeScript Support

The plugin provides full TypeScript support with auto-generated type definitions in `./dts/` directory.

## License

MIT