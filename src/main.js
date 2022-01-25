import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

addEventListener("mouseup", (e) => {
    store.state.mouse.down = false;
});

addEventListener("mousedown", (e) => {
    store.state.mouse.down = true;
});