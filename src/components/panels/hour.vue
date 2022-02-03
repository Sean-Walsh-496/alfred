<template>
    <div class="content">
        {{id}}
    </div>
    
</template>

<script>
export default {
    name: "Hour",
    props: ["parent", "id"],

}
</script>

<style scoped>
    .content{
        width: 100%;
        height: 100%;
        background: chartreuse;
    }

</style>