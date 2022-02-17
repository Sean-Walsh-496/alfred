<template>
    <body>
        <ol class="life">
            <ol class="year" v-for="j in 80" :key="j">
                <li class="week" v-for="i in 52" :key="i"></li>
            </ol>
        </ol>
    </body>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    ol {
        display: flex;
        list-style: none;
        padding: 0px;
    }

    body {
        height: 100%;
        width: 100%;
        margin: 0px;
    }

    .life {
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin: 0px;

    }

    .year {
        flex-direction: row;
        flex: 1

    }

    .week {
        height: 100%;
        width: 2%;
        border: 1px solid var(--border);

    }


</style>