<template>
    <div class="taskbar" :style="{width: $store.state.homePage.taskbar.width + 'px'}">

    </div>
</template>

<script>
export default {
    name: "TaskBar",

}
</script>

<style scoped>
    .taskbar {
        height: 100%;
        background: var(--background-1);
        border-right: 2px solid var(--border);  
    }
</style>