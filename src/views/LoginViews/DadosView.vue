<!-- <script setup> 
// import { ref } from 'vue';
// import HeaderVue from '@/components/HeaderVue.vue'
// import FooterVue from '@/components/FooterVue.vue'
// import { useAuthStore } from '@/store/auth';
// const store = useAuthStore();
// import axios from 'axios';
// 
// const nome = ref('')
// async function click(){
//     await store.setVerify(nome.value)
//     if (store.verificado){
//         console.log(store.username)
//         await submitAndUpgradeData(store.username)
//     }
//     
// }
//     
// 
// async function submitAndUpgradeData(dados) {
//     try {
//         const picture = (await axios.get(`https://api.github.com/users/${dados}`)).data.avatar_url
//         store.setPicture(picture)
//         console.log(picture)
//         const response = await axios.patch(
//             `https://fabricaneeds-back-equipe5-3edw.onrender.com/api/usuarios/${store.id}/`,
//             { github_username: dados,
//               verified: true,
//               picture: picture
//              },
//             {
//                 headers: {
//                     Authorization: `Bearer ${store.token}`
//                 }
//             }
//         );
//         console.log(response.data);
//     } catch (error) {
// 
//         console.error("Error updating data:", error);
//     }
// }
// </script>
// <template>
//     <HeaderVue />
//     <h1>Lista de membros da Fabrica de Software</h1>
//     <main>
//         <form action="" @submit.prevent>
//             <input type="text" v-model="nome">
//             <button type="submit" @click="click()">Enviar</button>
//         </form>
//     </main>
//     <FooterVue />
// </template>
// 
// <style scoped></style> -->