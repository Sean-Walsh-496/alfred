<template>
    <div id="item-picker" class="bounding-box" :style="{top: `${state.position.y}px`, left: `${state.position.x}px`,
         height: `${state.bufferDimensions.y}px`, width: `${state.bufferDimensions.x}px`,
         visibility: `${state.visibility}`}" @mouseleave="makeInvisible">

        <div class="content" :style="{height: `${state.dimensions.y}px`, width: `${state.dimensions.x}px`}">
            <header>
                {{state.headerText}}
            </header>
            <body>
                <button class="day-btn" :onclick="addPanel">
                    day ⬜
                </button>
                <button class="life-btn">

                </button>
                
            </body>

        </div>

    </div>
    
</template>

<script>

import {mapMutations} from "vuex";
import {createApp} from '@vue/runtime-dom';
import Panel from "./panel.vue";

export default {
    components: {
        Panel
    },
    methods: {
        makeInvisible(){
            this.state.dimensions.x = 0;
            this.state.dimensions.y = 0;

            this.state.position.x = -9999;
            this.state.position.y = -9999;
            
            this.state.headerText = "";

            this.state.visibility = "hidden";
        },
        addPanel($ev){
            this.makeInvisible();
            const type = "day-schedule";
            const n = this.panels.length;
            const wrapper = document.createElement("div");
            
            this.addPanelData({e: $ev, type: type}); // creates the data in the $store

            document.body.appendChild(wrapper);
            createApp(Panel, {id: n, state: this.panels[n], type: type}).use(this.$store).mount(wrapper);
        },
        ...mapMutations(["addPanelData"])
    },

    computed: {
        state(){
            return this.$store.state.itemPicker;
        },
        panels(){
            return this.$store.state.homePage.dashboard.panels;
        }
    }
}
</script>

<style scoped>

    .bounding-box{
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        position: absolute;
    }

    .content{
        display: flex;
        flex-direction: column;
        transition: width 1s, height 1s;
        background-color: white;
        border-radius: 5px;
        border: 1px solid var(--border);
    }

    header{
        background-color: var(--dark-tag);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        color: black;
        flex: 1;
    }

    body{
        display: flex;
        flex-direction: column;
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
        flex: 9
    }
    .day-btn{
        width: 100%;
        height: 20%;

    }


</style>