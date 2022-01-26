<template>
    <div class="dashboard" @click="addPanel"></div>
</template>


<script>
import {mapMutations} from "vuex";
import {createApp} from '@vue/runtime-dom';
import Panel from "./panel.vue";


export default {
    name: "Dashboard",
    components: {
        Panel
    },
    props: {
        module
    },
    computed: {
        numOfPanels(){
            return this.module.dashboard.panels.length;
        }
    },
    methods: {
        addPanel($ev){
            this.addPanelData($ev); // creates the data in the $store

            let n = this.numOfPanels;
            let wrapper = document.createElement("div");
            
            document.body.appendChild(wrapper);
            createApp(Panel, {id: n, module: this.$store.state.homePage.dashboard}).use(this.$store).mount(wrapper);

        },
        ...mapMutations(["addPanelData"])
    }
}
</script>

<style scoped>
    .dashboard{
        background: var(--background-1);
        height: 100%;
        width: 100%;
    }
</style>