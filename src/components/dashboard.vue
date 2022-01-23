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
            let p = createApp(Panel).mount(this.$el);
            let newPos = [$ev.pageX, $ev.pageY];
            console.log(newPos);
            p.spawn(newPos);
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