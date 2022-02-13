<template>
    <div class="content" :style="{'border-bottom-color': borderColor}" @click="clicked">
        
    </div>
    
</template>

<script>
import { createApp } from '@vue/runtime-dom';

import {mapMutations} from "vuex";
import Activity from "./activity.vue";

export default {
    name: "Hour",
    props: ["parent", "id"],
    components: {
        Activity
    },
    data(){
        let borderColor = "transparent";
        if (this.id == 24) borderColor = "var(--border)";
        let panel = this.parent.parent;
        let state = panel.state.content.hours[this.id - 1];
        return {
            borderColor: borderColor,
            panel: panel,
            state: state
        };
    },
    methods: {
        clicked(){
            //add data
            let rect = this.$el.getBoundingClientRect()
            let payload = {parent: this.panel, id: this.id,
                             position: {x: rect.left, y: rect.top},
                             dimensions: {x: rect.width, y: rect.height}
                             
                             };
            this.addActivity(payload);

            //add GUI element
            let wrapper = document.createElement("div");
            wrapper.style.position = "absolute"
            wrapper.style.top = "0px"
            wrapper.style.zIndex = 11;
            document.body.appendChild(wrapper);
            createApp(Activity, {parent: this, day: this.parent, state: this.state.content}).use(this.$store).mount(wrapper);

        },
        ...mapMutations(["addActivity"])

    },

}
</script>

<style scoped>
    .content{
        width: 100%;
        height: 100%;
        border-top: solid var(--border) 1px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

</style>