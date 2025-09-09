import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './src/index.ts',
  platform: 'node',
  dts: true,
  minify: true,
  exports: true,
  onSuccess () {
    console.info('✅ Base ESLint config build succeeded!')
  }
})
