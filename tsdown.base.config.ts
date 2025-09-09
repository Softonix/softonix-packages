import type { UserConfig } from 'tsdown'

export const baseTsdownConfig: UserConfig = {
  format: 'esm',
  platform: 'node',
  dts: true,
  clean: true,
  minify: false
}
