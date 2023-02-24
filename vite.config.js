import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
        compilerOptions: {
          // treat all tags with a "ui5-" prefix as custom elements
          isCustomElement: tag => tag.startsWith('ui5-')
        }
      }
  })],
  base: process.env.NODE_ENV === 'production' ? '/ui5-webcomponents-sample-vue' : '/',
  build: {
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
});
