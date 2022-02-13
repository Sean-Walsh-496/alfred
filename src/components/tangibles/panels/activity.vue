<template>
    <div class="content" :style="{top: state.position.y +'px', left: state.position.x + 'px', width: (state.dimensions.x) + 'px', 
         height: (state.dimensions.y) + 'px', zIndex: state.zIndex}" @mousedown="pickUp">

        <dynamicBorder side='N' :parent="this"/>
        <dynamicBorder side='N' :parent="this"/>


    </div>
    
</template>

<script>

import moveable from "../../abstracts/moveable.js";
import morpheable from "../../abstracts/morpheable.js";
import dynamicBorder from "../dynamicBorder.vue";

export default {
    name: "Activity",
    components: {
        dynamicBorder
    },
    mixins: [moveable, morpheable],
    props: ["day", "parent", "state"],
    methods: {
        pickUp(){
            this.state.zIndex = 11;
            this.$store.state.mouse.target = this;
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
        moveData(newIndex){
            this.parent.state.content = null;
            this.panelData.content.hours[newIndex].content = this.state;
        },
        drop(){
            this.state.zIndex = 5;

            const hourIndex = this.findHour();
            this.moveData(hourIndex);

            const hour = this.day.$el.getElementsByClassName("hour-list")[0].children[hourIndex];
            let hourRect = hour.getBoundingClientRect();

            this.state.position.y = hourRect.top;
            this.state.position.x = hourRect.left;

        }

    },
    computed: {
        panelData(){
            return this.$store.state.homePage.dashboard.panels[this.day.parent.id];
        },
        panelPosition(){ return this.panelData.position },
        panelDimensions() {return this.panelData.dimensions},
        pickedUp(){ return this.$store.state.mouse.target == this },
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
    },


}
</script>

<style scoped>

    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        height: 100px;
        width: 100px;
        background: blue;

    }

</style>