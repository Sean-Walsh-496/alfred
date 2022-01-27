<template>
    <div class="draggable" @mousedown="pickUpParent"></div>    
</template>


<script>

export default {
    name: "Draggable",
    props: ["type", "parent"],
    methods: {
        pickUpParent(){
            this.$store.state.mouse.target = this.parent;
        },
    }
    
}
</script>

<style scoped>
    .draggable {
        height: 10px;
        width: 100%;
        background: var(--border);
    }
</style>