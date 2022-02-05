<template>
    <div class="content" :style="{top: rect.y + 'px', left: rect.x + 'px', width: (rect.right - rect.x) + 'px', height: (rect.bottom - rect.y) + 'px'}">

    </div>
    
</template>

<script>
export default {
    name: "Activity",
    props: ["day", "parent"],
    data(){
        let panel = this.$store.state.homePage.dashboard.panels[this.day.parent.id];
        let data = panel.content.hours[this.parent.id - 1];
        let rect = this.parent.$el.getBoundingClientRect()
        return {
            data: data,
            rect: rect

        };
    },
    methods: {
    },
    computed: {
        panelData(){
            return this.$store.state.homePage.dashboard.panels[this.day.parent.id];
        }
    },
    watch: {
        panelData: {
            handler(){
                this.rect = this.parent.$el.getBoundingClientRect();
            },
            deep: true
        }
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