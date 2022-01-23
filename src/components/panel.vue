<template>
    <div id="main" :style="{top: position[1] + 'px', left: position[0] + 'px'}">
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
        }
    },
    methods: {
        spawn(newPos){
            console.log("working");
            this.position = newPos;
        }
    }
}
</script>

<style scoped>
    #main {
        position: absolute;
        width: 500px;
        height: 100px;
        background: var(--blue);
    }
</style>