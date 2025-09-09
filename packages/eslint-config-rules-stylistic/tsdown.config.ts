import { defineConfig } from 'tsdown'
import { baseTsdownConfig } from '../../tsdown.base.config'

export default defineConfig({
  ...baseTsdownConfig,
  entry: './src/index.ts',
  onSuccess () {
    console.info('✅ Stylistic ESLint config build succeeded!')
  }
})
