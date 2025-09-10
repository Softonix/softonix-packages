import Components from 'unplugin-vue-components/vite'
import { TMappedOptions, resolveExtendOverride } from '../utils'
import { IconsResolverCustom } from './vite.config.icons'

export * as Resolvers from 'unplugin-vue-components/resolvers'

export type TComponentsOptions = NonNullable<Parameters<typeof Components>[0]>

/* CONFIGURATION FOR COMPONENTS AUTO-IMPORT */
export const ComponentsBuilder = (options?: TMappedOptions<TComponentsOptions> & { withIcons?: boolean }) => {
  const defaults: TComponentsOptions = {
    dts: './dts/components.d.ts',
    globs: [
      './src/components/**/*.vue',
      './src/views/**/components/**/*.vue'
    ],
    resolvers: [
      ...(options?.withIcons ? [IconsResolverCustom()] : [])
    ]
  }

  return Components(resolveExtendOverride(defaults, options))
}
