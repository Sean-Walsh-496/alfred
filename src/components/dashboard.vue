<template>
    <div id="main" @click="addPanel"></div>
</template>


<script>
import {mapState, mapMutations} from "vuex";
import { createApp } from '@vue/runtime-dom';
import Panel from "./panel.vue";


export default {
    name: "Dashboard",
    components: {
        Panel
    },
    computed: {
        numOfPanels(){
            return this.$store.state.homePage.dashboard.panels.length;
        }
    },
    methods: {
        addPanel($ev){
            let n = this.numOfPanels;
            this.addPanelData($ev);
            let d = document.createElement("div");
            document.body.appendChild(d);
            let a = createApp(Panel, {id: n, module: this.$store.state.homePage.dashboard}).mount(d);

        },
        ...mapMutations(["addPanelData"])
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