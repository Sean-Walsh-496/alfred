<template>
    <div id="main" :style="{top: position[1] + 'px', left: position[0] + 'px', height: dims[1] + 'px', width: dims[0] + 'px'}">
        <div id="top-bar">
            <Draggable type="move" :dims="dims" :position="position"/>
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

export default {
    name: "Panel",
    components: {
        Draggable
    },
    data() {
        return {
            position: [0,0],
            dims: [0,0]
        }
    },
    methods: {
        spawn(newPos){
            this.position = newPos;
            setTimeout(() => this.dims = [100,100], 50);

        },
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