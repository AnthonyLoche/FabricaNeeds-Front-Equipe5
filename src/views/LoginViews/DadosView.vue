<script setup>
import { ref, onMounted } from 'vue';
import HeaderVue from '@/components/HeaderVue.vue'
import FooterVue from '@/components/FooterVue.vue'
import { useAuthStore } from '@/store/auth';
const store = useAuthStore();
import axios from 'axios';

const members = ref([])
const usernames = ref([])
const nome = ref('')

onMounted(async () => {
    const response = await fetch('https://api.github.com/orgs/fabricadesoftware-ifc/members')
    members.value = await response.json()

    members.value.forEach(member => {
        usernames.value.push((member.login).toLowerCase())
    })

    console.log(usernames.value)
})

async function submitAndUpgradeData(dados) {
    if(usernames.value.includes(dados.toLowerCase())){
    try {
        const response = await axios.patch(
            `http://localhost:8000/api/usuarios/${store.id}/`,
            { github_username: dados },
            {
                headers: {
                    Authorization: `Bearer ${store.token}`
                }
            }
        );

        console.log(response.data);
    } catch (error) {
        console.error("Error updating data:", error);
    }}
    else{
        console.log("dEUPAU")

    }
}





</script>

<template>
    <HeaderVue />
    <h1>Lista de membros da Fabrica de Software</h1>
    <main>
        <form action="" @submit.prevent>
            <input type="text" v-model="nome">
            <button type="submit" @click="submitAndUpgradeData(nome)">Enviar</button>
        </form>
    </main>
    <FooterVue />
</template>

<style scoped></style>