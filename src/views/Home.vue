<template>
  <div id="main">
    <TaskBar></TaskBar>
    <Dashboard v-bind:state="$store.state.homePage.dashboard"></Dashboard>
    <ItemPicker/>
  </div>
</template>

<script>
// @ is an alias to /src

import TaskBar from "../components/tangibles/taskbar.vue";
import Dashboard from "../components/tangibles/dashboard.vue";
import ItemPicker from "../components/tangibles/itemPicker.vue";
import ActivityPicker from "../components/tangibles/activityPicker.vue";

export default {
  name: 'Home',
  components: {
    TaskBar,
    Dashboard,
    ItemPicker,
    ActivityPicker
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
