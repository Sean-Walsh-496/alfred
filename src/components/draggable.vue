<template>
    <div class="draggable" @click="test"></div>    
</template>


<script>
export default {
    name: "draggable",
    props: ["type", "dims", "position"],
    methods: {
        test(){
            console.table([this.type, this.dims, this.position]);
        },
        pickUpParent(){
            
        }
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