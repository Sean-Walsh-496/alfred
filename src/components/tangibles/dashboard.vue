<template>
    <div class="dashboard" @click="moveItemPicker"></div>
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
    props: ["state"],
    computed: {
        numOfPanels(){
            return this.state.panels.length;
        }
    },
    methods: {
        addPanel($ev){
            let n = this.numOfPanels;
            let wrapper = document.createElement("div");
            
            this.addPanelData({e: $ev, type: "day-schedule"}); // creates the data in the $store

            document.body.appendChild(wrapper);
            createApp(Panel, {id: n, state: this.state.panels[n]}).use(this.$store).mount(wrapper);

        },
        ...mapMutations(["addPanelData", "moveItemPicker"])
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