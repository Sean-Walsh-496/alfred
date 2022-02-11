<template>
    <div class="content" :style="{top: rect.y +'px', left: rect.x + 'px', width: (rect.right - rect.x) + 'px', 
         height: (rect.bottom - rect.y) + 'px', zIndex: state.zIndex}" @click="pickUp">

    </div>
    
</template>

<script>

import moveable from "../../abstracts/moveable.js";
import morpheable from "../../abstracts/morpheable.js";
import snappable from "../../abstracts/snappable.js";

export default {
    name: "Activity",
    mixins: [moveable, morpheable, snappable],
    props: ["day", "parent", "state"],
    data(){
        let panel = this.$store.state.homePage.dashboard.panels[this.day.parent.id];
        let data = panel.content.hours[this.parent.id - 1];
        let rect = this.parent.$el.getBoundingClientRect();
        console.log(this.parent.$el)
        console.log(this.parent.$el.getBoundingClientRect())
        return {
            data: data,
            rect: rect

        };
    },
    methods: {
        pickUp(){
            this.state.content.zIndex = 11;
            console.log(this.state)
        },
        drop(){
            this.state.content.zIndex = 5;
        }

    },
    computed: {
        panelData(){
            return this.$store.state.homePage.dashboard.panels[this.day.parent.id];
        },
        pickedUp(){
            return this.state.content.pickedUp;
        },
    },
    watch: {
        panelData: {
            handler(){
                //jank as hell timeout. The Vuex store is updating its position, but getBoundingClientRect
                // is just too slow apparently.
                setTimeout(() => {this.rect = this.parent.$el.getBoundingClientRect()}, 10);
            },
            deep: true
        },
        pickedUp(val){
            // if (val == true) this.pickUp();
            // else this.drop();
        },
    },


}
</script>

<style scoped>

    .content{
        position: absolute;
        height: 100px;
        width: 100px;
        background: blue;

    }

</style>