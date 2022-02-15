<template>
    <div id="item-picker" class="bounding-box" :style="{top: `${state.position.y}px`, left: `${state.position.x}px`,
         height: `${state.bufferDimensions.y}px`, width: `${state.bufferDimensions.x}px`}" @mouseleave="makeInvisible">

        <div class="content" :style="{height: `${state.dimensions.y}px`, width: `${state.dimensions.x}px`}">
            <header>
                {{state.headerText}}
            </header>
            <body>
                
            </body>

        </div>

    </div>
    
</template>

<script>
export default {
    methods: {
        makeInvisible(){
            this.state.dimensions.x = 0;
            this.state.dimensions.y = 0;
            this.state.headerText = ""
        }

    },

    computed: {
        state(){
            return this.$store.state.itemPicker;
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
        background-color: tomato;
    }

    .header{
        background-color: gray;
        color: white;
    }

    .body{
        display: flex;
        flex-direction: column;
    }


</style>