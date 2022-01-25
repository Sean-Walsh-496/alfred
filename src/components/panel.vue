<template>
    <div id="main" :style="{top: position[1] + 'px', left: position[0] + 'px', 
         height: dimensions[1] + 'px', width: dimensions[0] + 'px'}">

        <div id="top-bar">
            <Draggable type="move" :parent="this"/>
        </div>
        <div>
            <slot></slot>
        </div>
        <div>

        </div>
    </div>
</template>


<script>

import Draggable from "./draggable.vue";
import {mapMutations} from "vuex"; 

export default {
    name: "Panel",
    components: {
        Draggable
    },
    props: {
        id: {type: Number},
        module
    },
    computed: {
        position(){
            const temp = this.module.panels[this.id].position
            return [temp.x, temp.y];
        },
        dimensions(){
            const temp = this.module.panels[this.id].dimensions
            return [temp.x, temp.y];
        }
    },
    methods: {
        ...mapMutations(["movePanel"])
    }
}
</script>

<style scoped>
    #main {
        position: absolute;
        background: var(--blue);
        transition-property: height, width;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }
</style>