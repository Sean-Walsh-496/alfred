<template>
    <div class="content">
        <div class="day">
            <ol class="hour-list">
                <li v-for="i in hours" :key="i.position">
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
    props: ["parent"],
    data(){
        let times = [];
        for (let i = 0; i < 24; i++){
            times.push({position: i + 1});
        }
        return {
            hours: times
        };
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