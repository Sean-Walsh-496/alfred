<template>
    <div class="draggable" @mousedown="pickUpParent"></div>    
</template>


<script>
import {mapMutations} from "vuex";

export default {
    name: "draggable",
    props: ["type", "parent"],
    methods: {
        pickUpParent(e){
            this.$store.state.mouse.target = this.parent;
        },
        putDownParent(){

        },
        ...mapMutations(["pickUpPanel", "putDownPanel"])
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