<template>
    <div class="content" :style="{'border-bottom-color': borderColor}">
        
    </div>
    
</template>

<script>
export default {
    name: "Hour",
    props: ["parent", "id"],
    data(){
        let borderColor = "transparent";
        if (this.id == 24) borderColor = "var(--border)";
        return {
            borderColor: borderColor
        };
    }

}
</script>

<style scoped>
    .content{
        width: 100%;
        height: 100%;
        border-top: solid var(--border) 1px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

</style>