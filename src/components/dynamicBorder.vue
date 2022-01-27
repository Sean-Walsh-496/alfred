<template>
<style>
    :root{
        --border-height {{ borderHeight }};
        --border-width {{ borderWidth }};
        --direction {{borderDirection}}
    }
</style>
<div class="corner"></div>

    <div class="dynamic-border">
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
        switch (this.type){
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
    flex-direction: var(--direction);
    background: var(--border);
    height: var(--border-height);
    width: var(--border-width);

}
.filler{

}
.corner{

}

</style>