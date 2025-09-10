import type { PluginOption } from 'vite'
import { ComponentsBuilder, type TComponentsOptions } from './plugins/vite.config.components'
import { ImportsBuilder, type TScriptsOptions } from './plugins/vite.config.imports'
import { IconsBuilder } from './plugins/vite.config.icons'
import type { TMappedOptions } from './utils'

interface IAutoImportPluginOptions {
  components?: TMappedOptions<TComponentsOptions> & {
    enabled?: boolean
  }
  scripts?: TMappedOptions<TScriptsOptions> & {
    enabled?: boolean
  }
  icons?: {
    enabled?: boolean
  }
}

export function SoftonixAutoImportsVue (options: IAutoImportPluginOptions = {}): PluginOption[] {
  const pluginOptions: PluginOption[] = []
  const componentsEnabled = options.components?.enabled !== false
  const scriptsEnabled = options.scripts?.enabled !== false
  const iconsEnabled = options.icons?.enabled !== false

  // Add imports plugin (enabled by default)
  if (scriptsEnabled) {
    pluginOptions.push(ImportsBuilder(options.scripts))
  }

  // Add components plugin (enabled by default)
  if (componentsEnabled) {
    pluginOptions.push(ComponentsBuilder({
      ...options.components,
      withIcons: options.icons?.enabled !== false
    }))
  }

  // Add icons plugin (enabled by default)
  if (componentsEnabled && iconsEnabled) {
    pluginOptions.push(IconsBuilder())
  }

  return pluginOptions
}
