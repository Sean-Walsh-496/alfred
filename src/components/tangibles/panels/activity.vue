<template>
    <div class="content" :style="{top: state.position.y +'px', left: state.position.x + 'px', width: (state.dimensions.x) + 'px', 
         height: (state.dimensions.y) + 'px', zIndex: state.zIndex}">

        <DynamicBorder ref="topDyn" side='N' :parent="this"/>
        <div class="filler" @mousedown="pickUp"></div>
        <DynamicBorder ref="bottomDyn" side='S' :parent="this"/>


    </div>
    
</template>

<script>

import moveable from "../../abstracts/moveable.js";
import morpheable from "../../abstracts/morpheable.js";
import DynamicBorder from "../dynamicBorder.vue";

export default {
    name: "Activity",
    components: {
        DynamicBorder
    },
    mixins: [moveable, morpheable],
    props: ["day", "parent", "state"],
    methods: {
        transform(){
            this.drop();
            const currentIndex = this.panelData.content.hours.findIndex(el => el.content === this.state);
            let newHeight = this.findHeight();
            newHeight = newHeight + currentIndex - 1 > 23 ? 24 - currentIndex : newHeight;

            let bottomIndex = currentIndex + newHeight - 1;

            let list = this.day.$el.getElementsByClassName("hour-list")[0];
            let newBottom = list.children[bottomIndex].getBoundingClientRect().bottom;

            this.state.dimensions.y = newBottom - this.state.position.y;

            this.state.duration = newHeight;



        },
        pickUp(){
            this.state.zIndex = 11;
            this.$store.state.mouse.target = this;
        },
        drop(){
            this.state.zIndex = 5;

            const hourIndex = this.findHour();
            this.moveData(hourIndex);

            const hour = this.day.$el.getElementsByClassName("hour-list")[0].children[hourIndex];
            let hourRect = hour.getBoundingClientRect();

            this.state.position.y = hourRect.top;
            this.state.position.x = hourRect.left;

        },

        findHour(){
            const list = this.day.$el.getElementsByClassName("hour-list")[0];
            let closest = Infinity, closestIndex = null;
            for (let i = 0; i < list.children.length; i++){
                let iy = list.children[i].getBoundingClientRect().top;
                if (Math.abs(iy - this.state.position.y) < closest){
                    closest = Math.abs(iy - this.state.position.y);
                    closestIndex = i;
                }
            }
            return closestIndex;
        },
        findHeight(){
            const hourHeight = this.parent.$el.getBoundingClientRect().height - 2;
            if ( (this.state.dimensions.y % hourHeight) > (hourHeight / 2) ){
                return Math.ceil(this.state.dimensions.y / hourHeight);
            }
            else {
                return Math.floor(this.state.dimensions.y / hourHeight);
            }
        },

        moveData(newIndex){
            this.parent.state.content = null;
            this.panelData.content.hours[newIndex].content = this.state;
        },



    },
    computed: {
        panelData(){
            return this.$store.state.homePage.dashboard.panels[this.day.parent.id];
        },
        panelPosition(){ return this.panelData.position },
        panelDimensions() {return this.panelData.dimensions},
        pickedUp(){ return this.$store.state.mouse.target == this },
        mouseTarget() { return this.$store.state.mouse.target }
    },
    watch: {
        panelPosition: {
            handler(){
                //jank as hell timeout. The Vuex store is updating its position, but getBoundingClientRect
                // is just too slow apparently.
                setTimeout(() => {
                    const rect = this.parent.$el.getBoundingClientRect();
                    this.state.position.x = rect.left; this.state.position.y = rect.top;
                    
                    }, 10);
            },
            deep: true
        },
        panelDimensions: {
            handler(){
                const rect = this.parent.$el.getBoundingClientRect();
                this.state.dimensions.x = rect.width; this.state.dimensions.y = rect.height;
            },
            deep: true
        },
        pickedUp(val){
            if (val != true) this.drop();
        },
        mouseTarget(newVal, oldVal){
            if (oldVal == this.$refs.topDyn || oldVal == this.$refs.bottomDyn){
                this.transform();
            }
        }
    },


}
</script>

<style scoped>

    .filler{
        height: 100%;
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        height: 100px;
        width: 100px;
        background: blue;

    }

</style>