<template>
  <div id="main">
    <TaskBar></TaskBar>
    <div style="background: black; height: 100%; width: 100%;">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import TaskBar from "../components/taskbar.vue";

export default {
  name: 'Home',
  components: {
    TaskBar
  }
}
</script>

<style scoped>
  #main{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
  }
</style>
