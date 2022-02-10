<template>

    <div class="dynamic-border" :style="{height: borderHeight, width: borderWidth, 
         'flex-direction': borderDirection}">
        <div class="corner" @mousedown="dragTLCorner"></div>
        <div class="filler" @mousedown="targetFiller"></div>
        <div class="corner" @mousedown="dragBRCorner"></div>
    </div>    
</template>

<script>

export default {
    name:"Dynamic-border",
    props: ["side", "parent"],
    methods: {
        targetFiller(){
            this.$store.state.mouse.target = this;
        },
        move(delta_x, delta_y){
            switch (this.side){
                case 'N':
                    this.parent.morph(0, -delta_y);
                    this.parent.move(0, delta_y);
                    break;

                case 'E':
                    this.parent.morph(delta_x, 0,);
                    this.parent.move(0, 0);
                    break;
                case 'S':
                    this.parent.morph(0, delta_y);
                    this.parent.move(0, 0);
                    break;
                case 'W':
                    this.parent.morph(-delta_x, 0);
                    this.parent.move(delta_x, 0);
                    break;
                
            }
        }
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