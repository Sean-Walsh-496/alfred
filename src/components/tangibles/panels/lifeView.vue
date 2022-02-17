<template>
    <body>
        <ol class="life" :v-for="i in 80">
            <ol class="year" :v-for="j in 52">
                <li class="week"></li>
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