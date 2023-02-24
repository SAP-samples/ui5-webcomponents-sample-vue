import { createApp, h, configureCompat } from '@vue/compat';
import App from './App.vue';

configureCompat({ 
  RENDER_FUNCTION: false, 
})

const app = createApp({
  render: () => h(App),
});

app.mount('#app');