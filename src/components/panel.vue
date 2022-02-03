<template>
    <div class="panel" :style="{top: position[1] + 'px', left: position[0] + 'px', 
         height: dimensions[1] + 'px', width: dimensions[0] + 'px'}">

        <DynamicBorder side='W' :parent="this"/>
        <div style="height: 100%; width: 100%; display: flex; flex-direction: column">
            <div class="top-bar">
                <DynamicBorder side='N' :parent="this"/>
                <Draggable type="move" :parent="this"/>
            </div>
            <div class="content">
                <DaySchedule/>
            </div>
            <div class="top-bar">
                <DynamicBorder side='S' :parent="this"/>

            </div>
            
        </div>
        <DynamicBorder side='E' :parent="this"/>

    </div>
</template>


<script>

import Draggable from "./draggable.vue";
import DynamicBorder from "./dynamicBorder.vue";
import {mapMutations} from "vuex"; 
import DaySchedule from "./panels/daySchedule.vue";

export default {
    name: "Panel",
    components: {
        Draggable,
        DynamicBorder,
        DaySchedule
    },
    props: ["id", "module"],
    computed: {
        position(){
            const temp = this.module.panels[this.id].position
            return [temp.x, temp.y];
        },
        dimensions(){
            const temp = this.module.panels[this.id].dimensions
            return [temp.x, temp.y];
        }
    },
    methods: {
        move(delta_x, delta_y){
            this.movePanel({delta_x: delta_x, delta_y: delta_y, id: this.id});
        },
        drop(){
            this.snapPanel(this.id);
        },
        ...mapMutations(["movePanel", "snapPanel"])
    }
}
</script>

<style scoped>
    .panel {
        position: absolute;
        background: var(--blue);
        /*
        transition-property: height, width;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
        */
        border: 2px solid var(--border);
        display: flex;
        flex-direction: row;
    }

    .top-bar{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: max-content;
    }

    .content{
        flex: 1 1 auto
    }

</style>