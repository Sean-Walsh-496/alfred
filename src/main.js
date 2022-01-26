import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

addEventListener("mouseup", () => {
    store.state.mouse.down = false;
    store.state.mouse.target = null;
});

addEventListener("mousedown", () => {
    store.state.mouse.down = true;
});

addEventListener("mousemove", (e) =>{
    store.commit("moveMouseTarget", e);
});