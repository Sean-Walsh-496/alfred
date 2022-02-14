<template>
    <div class="content">
        <div class="day">
            <ol class="hour-list" style="height: 100%">
                <li v-for="i in $store.state.homePage.dashboard.panels[parent.id].content.hours" 
                    :key="i.position" style="height: 4%">
                    <Hour :parent="this" :id="i.position"/>
                </li>
            </ol>
        </div>
    </div>
    
</template>


<script>
import Hour from "./hour.vue";

export default {
    name: "DaySchedule",
    components: {
        Hour
    },
    props: ["parent", "state"],
    methods: {
        insert(index, activity){

        },
        /**
         * @param {number} index
         */
        delete(index){
            this.state[index].content = null
        },


        shift(){

        },
        /**
         * @param {number} a the index to be moved
         * @param {number} b the new location
         */
        relocate(a, b){
            this.insert(b, this.state.hours[a]);
            this.delete(a);
        }
    }
}
</script>

<style scoped>

.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.day{
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;


}

.hour-list{
    display: flex;
    flex-direction: column;

}

ol li{
    list-style-type: none;
}
ol {
    padding: 0px;
}


</style>