import { defineConfig } from 'tsdown'
import { baseTsdownConfig } from '../../tsdown.config.base'

export default defineConfig({
  ...baseTsdownConfig,
  entry: './src/index.ts',
  onSuccess () {
    console.info('✅ TypeScript ESLint config build succeeded!')
  }
})
