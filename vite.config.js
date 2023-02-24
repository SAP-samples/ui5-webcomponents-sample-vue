import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
        compilerOptions: {
          // treat all tags with a ui5- as custom elements
          isCustomElement: tag => tag.includes('ui5-')
        }
      }
  })],
  base: process.env.NODE_ENV === 'production' ? '/ui5-webcomponents-sample-vue' : '/',
  resolve: {
    alias: {
      vue: '@vue/compat',
    },
  },
  build: {
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
});
