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
        ...mapMutations(["moveItemPicker"])
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