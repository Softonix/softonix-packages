import AutoImport from 'unplugin-auto-import/vite'
import { TMappedOptions, resolveExtendOverride } from '../utils'

export type TScriptsOptions = NonNullable<Parameters<typeof AutoImport>[0]>

/* CONFIGURATION FOR SCRIPTS AUTO-IMPORT */
export const ImportsBuilder = (options?: TMappedOptions<TScriptsOptions>) => {
  const defaults: TScriptsOptions = {
    dts: './dts/auto-imports.d.ts',

    dirs: [
      './src/**/*.store.ts',
      './src/**/*.service.ts',

      './src/composables',
      './src/composables/**/index.ts',
      './src/**/composables',
      './src/**/composables/**/index.ts'
    ],

    eslintrc: {
      enabled: true
    },

    imports: [
      'vue',
      'vue-router',
      '@vueuse/core',
      'pinia'
    ],

    resolvers: []
  }

  return AutoImport(resolveExtendOverride(defaults, options))
}
