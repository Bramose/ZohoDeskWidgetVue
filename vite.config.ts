import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const renameIndexPlugin: any = (newFilename: string) => {
  if (!newFilename) return

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(options: any, bundle: any) {
      const indexHtml = bundle['index.html']
      indexHtml.fileName = newFilename
      console.log('renaming index.html to', indexHtml.fileName)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), renameIndexPlugin('widget.html')],
  build: {
    outDir: 'build/app'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
