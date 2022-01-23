<template>
    <div id="main" @click="createPanel"></div>
</template>


<script>
import { createApp } from '@vue/runtime-dom';
import Panel from "./panel.vue";


export default {
    name: "Dashboard",
    components: {
        Panel
    },
    methods: {
        createPanel($ev){
            let d = document.createElement("div");
            this.$el.appendChild(d);
            let p = createApp(Panel).mount(d);
            p.spawn([$ev.pageX, $ev.pageY]);
        }
    }
}
</script>

<style scoped>
    #main{
        background: var(--background-1);
        height: 100%;
        width: 100%;
    }
</style>