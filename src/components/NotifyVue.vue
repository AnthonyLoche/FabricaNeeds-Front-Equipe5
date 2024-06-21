<script>
export default {
    name: 'NotifyVue',
    props: {
        erro: {
            type: String,
        },
        cor: {
            type: String,

        }
    }
}
</script>

<template>
    <main :style="{ backgroundColor: cor }">
        <h2> {{ erro }} </h2>
    </main>
</template>

<style scoped>
main {
    width: 15%;
    padding: 25px;
    position: absolute;
    top: 20%;
    left: 5%;
    text-align: center;
    color: white;
    z-index: 10;
    border-radius: 15px;
}

@media screen and (max-width: 1024px) {
    main {
        width: 50%;
        left: 25%;
    }
    
}
</style>