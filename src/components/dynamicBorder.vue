<template>

    <div class="dynamic-border" :style="{height: borderHeight, width: borderWidth, 
         'flex-direction': borderDirection}">
        <div class="corner"></div>
        <div class="filler"></div>
        <div class="corner"></div>
    </div>    
</template>

<script>
export default {
    name:"Dynamic-border",
    props: {
        side: {type: String, default: "N"}
    },
    methods: {

    },
    data(){
        let height, width, dir;
        switch (this.side){
            case 'N':
            case 'S':
                height = "1px";
                width = "100%"
                dir = "row";
                break;

            case 'W':
            case 'E':
                height = "100%";
                width = "1px"
                dir = "column";
                break;
        }
        return {
            borderHeight: height,
            borderWidth: width,
            borderDirection: dir 
        }
    }
}
</script>

<style scoped>

.dynamic-border{
    display: flex;
    background: var(--border);

}
/*
.filler{

}
.corner{

}
*/
</style>