<template>
    <body>
        <ol class="specifics"></ol>
        <ol class="types">
            <li style="background-color: var(--blue)"><p>Work</p></li>
            <li style="background-color: var(--red)"><p>Hobbies</p></li>
            <li style="background-color: var(--green)"><p>Learning</p></li>
            <li style="background-color: var(--yellow)"><p>Chores</p></li>
            <li style="background-color: var(--purple)"><p>Custom</p></li>
            <li style="background-color: var(--d-background-1)"><p>Sleep</p></li>
        </ol>
    </body>
    
</template>

<script>
export default {

}
</script>


<style scoped>
    body {
        display: flex;
        height: 500px;
        width: 400px;
        position: absolute;
        border-radius: 50px;
    }
    .types {
        background-color: var(--white);
        margin: 0px;
        flex: 4;
        border: 1px solid var(--border);
        list-style: none;
        padding: 0px;
    }
    .specifics {
        background-color: var(--white);
        margin: 0px;
        flex: 6
        
    }

    .types > li {
        border-bottom: 1px solid var(--border);
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: white;
        border-radius: 5px;
    }
    .types > li:hover {
        transform: scale(1.05);
    }
    .types > li > p{
        margin-bottom: 5px;
        margin-top: 5px;
        font-weight: 900;
    }


</style>