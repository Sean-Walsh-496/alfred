<template>

    <div class="dynamic-border" :style="{height: borderHeight, width: borderWidth, 
         'flex-direction': borderDirection}">
        <div class="corner" @mousedown="dragTLCorner"></div>
        <div class="filler" @mousedown="dragFiller"></div>
        <div class="corner" @mousedown="dragBRCorner"></div>
    </div>    
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name:"Dynamic-border",
    props: ["side", "parent"],
    methods: {
        move(delta_x, delta_y){
            switch (this.side){
                case 'N':
                    this.morphPanel({delta_x: 0, delta_y: -delta_y, id: this.parent.id});
                    this.movePanel({delta_x: 0, delta_y: delta_y, id: this.parent.id});
                    break;

                case 'E':
                    this.morphPanel({delta_x: delta_x, delta_y: 0, id: this.parent.id});
                    this.movePanel({delta_x: 0, delta_y: 0, id: this.parent.id});
                    break;
                case 'S':
                    this.morphPanel({delta_x: 0, delta_y: delta_y, id: this.parent.id});
                    this.movePanel({delta_x: 0, delta_y: 0, id: this.parent.id});
                    break;
                case 'W':
                    this.morphPanel({delta_x: -delta_x, delta_y: 0, id: this.parent.id});
                    this.movePanel({delta_x: delta_x, delta_y: 0, id: this.parent.id});
                    break;
                
            }



        },
        ...mapMutations(["morphPanel", "movePanel"])
    },
    data(){
        let height, width, dir;
        switch (this.side){
            case 'N':
            case 'S':
                height = "3px";
                width = "100%"
                dir = "row";
                break;

            case 'W':
            case 'E':
                height = "100%";
                width = "3px"
                dir = "column";
                break;
        }
        return {
            borderHeight: height,
            borderWidth: width,
            borderDirection: dir,
            fillerClicked: false,
            TLCornerClicked: false,
            BRCornerClicked: false
        }
    }
}
</script>

<style scoped>

.dynamic-border{
    display: flex;
    background: var(--border);

}
    
.filler{
    flex: 20;
}
.corner{
    flex: 1;
}

</style>