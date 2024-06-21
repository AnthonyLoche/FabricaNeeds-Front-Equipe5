<script>
export default {
    name: 'NotifyVue',
    props: {
        erro: {
            type: String,
        },
        cor: {
            type: String,
        },
        funcao: {
            type: Function,
        }
    },

}
</script>

<template>
    <main v-if="cor != ''" :style="{ backgroundColor: cor }">
        <h2> {{ erro }} </h2>
        <button>X</button>
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
}

main>button {
    border: 0;
    background-color: transparent;
    font-size: 15pt;
    cursor: pointer;
    color: white;
    opacity: 0.5;
    transition: 0.5s;
}

main>button:hover {
    opacity: 1;
}

@media screen and (max-width: 1024px) {
    main {
        width: 60%;
        margin: auto;
        left: 0;
        right: 0;
        top: 15%;
    }

}
</style>