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
    }

    body {
        height: 100%;
        width: 100%;
    }

    .life {
        flex-direction: column;
        height: 100%;
        width: 100%;

    }

    .year {
        flex-direction: row;

    }

    .week {
        height: 10px;
        width: 10px;
        border: 1px solid var(--border);

    }


</style>