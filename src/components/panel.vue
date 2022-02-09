<template>
    <div class="panel" :style="{top: position[1] + 'px', left: position[0] + 'px', 
         height: dimensions[1] + 'px', width: dimensions[0] + 'px',
         boxShadow: state.shadow, transform: state.transform}">

        <DynamicBorder side='W' :parent="this"/>
        <div style="height: 100%; width: 100%; display: flex; flex-direction: column">
            <div class="top-bar">
                <DynamicBorder side='N' :parent="this"/>
                <Draggable type="move" :parent="this"/>
            </div>
            <div class="content">
                <DaySchedule :v-if="type == 'day-schedule'" :parent="this"/>
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
import DaySchedule from "./panels/daySchedule.vue";
import helper from "../helper";

export default {
    name: "Panel",
    components: {
        Draggable,
        DynamicBorder,
        DaySchedule
    },
    props: ["id", "state", "type"],
    computed: {
        position(){
            const temp = this.state.position
            return [temp.x, temp.y];
        },
        dimensions(){
            const temp = this.state.dimensions
            return [temp.x, temp.y];
        },
        pickedUp() { return this.$store.state.mouse.target == this }
    },
    methods: {
        move(delta_x, delta_y){
            this.state.position.x += delta_x;
            this.state.position.y += delta_y;
        },
        snap(){
            console.log('in snap function')
            const cellSize = this.$store.state.homePage.dashboard.cellSize;
            const taskbar = this.$store.state.homePage.taskbar;

            this.state.position = helper.snapPoint(this.state.position.x, this.state.position.y, cellSize);
        
            //get the bottom-right corner position if size adjusted
            let corner = [this.state.dimensions.x, this.state.dimensions.y];
            let new_corner = helper.snapPoint(...corner, cellSize);

            this.state.dimensions.x = new_corner.x; this.state.dimensions.y = new_corner.y;
            
            //checks if out of bounds
            let newPos = helper.outOfBounds(this.state.position, this.state.dimensions, 
                            {x: taskbar.width, y: 0}, {x: 9999999, y: 9999999});

            this.state.position.x = newPos.x; this.state.position.y = newPos.y;
        },
        morph(delta_x, delta_y){
          this.state.dimensions.x += delta_x;
          this.state.dimensions.y += delta_y;
        },

        //sus

        pickUp(){
            this.$store.state.mouse.target = this;
            this.state.shadow = "12px 12px 2px 2px";
            this.state.transform = "scale(1.01)";

        },
        drop(){
            this.snap();
            this.state.shadow = "";
            this.state.transform = "";
        },
    },
    watch: {
        pickedUp: {
            handler(val){
                if (val == true){

                }
                else if (val == false){
                    this.drop();
                }
            },
        }
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