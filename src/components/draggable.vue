<template>
    <div class="draggable" @click="pickUpParent"></div>    
</template>


<script>
import {mapMutations} from "vuex";

export default {
    name: "draggable",
    props: ["type", "parent"],
    methods: {
        pickUpParent(){
            console.log(this.parent)
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