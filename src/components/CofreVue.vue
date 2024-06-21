<script setup>
import { ref } from 'vue'
import axios from 'axios'
import store from '@/store';
import router from '@/router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const total = ref(0)

async function getValor() {
    const { data } = await axios.get('https://fabricaneeds-back-equipe5-3edw.onrender.com/total/')
    total.value = data[0].total
}

function verLogado() {
    if (store.state.isLoged == 'true') {
        router.push('/contribuir')
    }
    else {
        toast.warning("Você Precisa Estar Logado Para contribuir", {autoClose: 1500, position: 'top-center'})
        setTimeout(() => {
            router.push('/singin')
        }, 2000)
    }

}


getValor()
</script>

<template>
    <section>
        <div id="cofre">
            <img src="../assets/Cofre.png" alt="" id="cofrinho">
        </div>
        <div id="cofreInfo">
            <h2 style="text-align: center;">Porquinho Fabricador</h2>
            <p>Dinheiro Contido No Porquinho:</p>
            <h3 id="valor">R$: {{ total.toFixed(2).replace(".", ",") }}</h3>
            <p style="text-align: center;">Contribua Você Também com o Nosso Amigo</p>
            <button id="contribuir" @click="verLogado">Contribuir</button>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+20+Charted&family=Oswald:wght@200..700&display=swap');

section {
    display: flex;
    align-items: center;
    padding: 30px;
    gap: 20px;
    width: 65%;
    margin: 10px auto;
}

button#contribuir {
    color: white;
    padding: 10px;
    background-color: #8C52FF;
    border: 0;
    text-decoration: none;
    font-size: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
}

section>div {
    width: 50%;
}

h3#valor {
    color: #8C52FF;
    font-size: 4vw;
    font-family: "Oswald", sans-serif;
    filter: brightness(1.2);
    text-shadow: 0 0 15px #8C52FF;
}

#cofre {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

#cofreInfo {
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
}

#cofreInfo>h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 30px;
}


img#cofrinho {
    width: 70%;
    animation: animationPorco 1.5s infinite;
}

#detalhes {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 20px;
    align-items: center;
    word-wrap: break-word;
}

#detalhes div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 33%;
    align-items: center;
    height: 150px;
    padding: 10px;
    text-align: center;
}

#detalhes>span {
    width: 2px;
    height: 140px;
    border: 1px solid white;
}

@keyframes animationPorco {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0);
    }
}

@media screen and (max-width: 1024px) {
    section {
        flex-direction: column;
        width: 100%;
    }

    #cofreInfo {
        width: 90%;
    }

    h3#valor {
        font-size: 40pt;
    }

    #cofre>img {
        width: 100%;
    }
}
</style>