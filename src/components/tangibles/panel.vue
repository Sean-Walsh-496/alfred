<template>
    <div class="panel" :style="{top: position[1] + 'px', left: position[0] + 'px', 
         height: dimensions[1] + 'px', width: dimensions[0] + 'px',
         boxShadow: state.shadow, transform: state.transform, zIndex: state.zIndex, transition: state.transitions}">

            <div class="top bar">
                <DynamicBorder side='N' :parent="this"/>
                <Draggable type="move" :parent="this"/>
            </div>
            <div class="body">
                <DynamicBorder side='W' :parent="this"/>
                <div class="content">
                    <DaySchedule v-if="type == 'day-schedule'" :parent="this" :state="state.content.hours"/>
                    <LifeView v-if="type == 'life-view'"/>
                </div>   
                <DynamicBorder side='E' :parent="this"/>                             
            </div>
            <div class="bottom bar">
                <DynamicBorder side='S' :parent="this"/>
            </div>
    </div>
</template>


<script>

import Draggable from "./draggable.vue";
import DynamicBorder from "./dynamicBorder.vue";
import DaySchedule from "./panels/daySchedule.vue";
import moveable from "../abstracts/moveable.js";
import morpheable from "../abstracts/morpheable.js";
import snappable from "../abstracts/snappable.js";
import LifeView from "./panels/lifeView.vue";

export default {
    name: "Panel",
    mixins: [moveable, morpheable, snappable],
    components: {
        Draggable,
        DynamicBorder,
        DaySchedule,
        LifeView
    },
    mounted(){
        this.addTransition();
        setTimeout(() => {
            this.state.dimensions.x = 500;
            this.state.dimensions.y = 500;
        }, 10);
        setTimeout(() => {
            this.removeTransition();
        }, 1000);
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
        addTransition(){
            this.state.transitions = "height 0.25s, width 0.25s";
        },
        removeTransition(){
            this.state.transitions = "";
        },
        pickUpChildren(){
            for (let target of this.state.content.hours){
                if (target.content != null){
                    target.content.pickedUp = true;
                }
            }
        },
        dropChildren(){
            for (let target of this.state.content.hours){
                if (target.content != null){
                    target.content.pickedUp = false;
                }
            }
        },

        pickUp(){
            this.$store.state.mouse.target = this;
            this.state.shadow = "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px";
            this.state.transform = "scale(1.01)";
            this.state.zIndex = 10;
            this.pickUpChildren();
        },
        drop(){
            this.snap();
            this.state.shadow = "";
            this.state.transform = "";
            this.state.zIndex = 0;
            this.dropChildren();
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
        background: var(--white);
        border: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        border-radius: 5px;
    }
    .bar{
        display: flex;
        flex-direction: column;
        width: 99.5%;
        height: max-content;
        background: var(--dark-tag);
        border: 1px solid transparent;                        
    }

    .top{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-color: var(--border);
    }
    .bottom{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-color: var(--border);        
    }
    .body{
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .content{
        flex: 1 1 auto
    }

</style>