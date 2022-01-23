<template>
    <div id="main" :style="{top: position[1] + 'px', left: position[0] + 'px', height: dims[1] + 'px', width: dims[0] + 'px'}">
        <div id="top-bar">

        </div>
        <div>
            <slot></slot>
        </div>
        <div>

        </div>
    </div>
</template>


<script>
export default {
    name: "Panel",
    data() {
        return {
            position: [0,0],
            dims: [0,0]
        }
    },
    methods: {
        spawn(newPos){
            this.position = newPos;
            this.dims = [200,200];
        }
    }
}
</script>

<style scoped>
    #main {
        position: absolute;
        background: var(--blue);
        transition-property: height, width;
        transition-duration: 2s;
        transition-timing-function: ease-in-out;
    }
</style>