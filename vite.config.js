import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, 'index.html'),
        about: resolve(projectRoot, 'about.html'),
        services: resolve(projectRoot, 'services.html'),
        contact: resolve(projectRoot, 'contact.html'),
      },
    },
  },
})
