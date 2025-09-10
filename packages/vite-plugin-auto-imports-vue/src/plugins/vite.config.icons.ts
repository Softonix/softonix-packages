import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export const IconsBuilder = async () => Icons({
  compiler: 'vue3',
  customCollections: {
    icon: FileSystemIconLoader('./src/assets/icons')
  }
})

export const IconsResolverCustom = (prefix = 'stx') => {
  if (!prefix) throw new Error('Prefix is required')

  return IconsResolver({
    prefix,
    customCollections: ['icon']
  })
}
