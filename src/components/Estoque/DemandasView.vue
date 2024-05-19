<script setup>
import { reactive, ref } from 'vue';
const demandas = ref([])
const estoque = ref([])
import { carregar, adicionar, atualizar, deletar } from '@/api/api';
carregar('demandas/', demandas)
carregar('estoque/', estoque)

const demanda = reactive({
    quantidade: 0,
    produto: '',
})


const modalAddIten = ref(null)

const inputPesquisa = ref("")

function filteredList() {
    return demandas.value.filter((demanda) =>
        demanda.nome_produto.toLowerCase().includes(inputPesquisa.value.toLowerCase())
    );
}

function openModal() {
    modalAddIten.value = true;
}

function closeModal() {
    modalAddIten.value = false;
}

</script>


<template>
    <main>
        <section>
            <h2>Demandas Atuais:</h2>
            <input class="input-pesquisa" type="text" v-model="inputPesquisa" placeholder="Procurar Demandas..." />
            <div class="rolagemItens">
                <div class="LoadingDiv" v-if="filteredList().length <= 0">
                <img src="../../assets/gif_carregando.gif" alt="">
                </div>
                <div id="estoque">
                    <div class="item" v-for="item in filteredList()" :key="item.id">
                        <div>
                            <p class="headerItem">ITEM:</p>
                            <p>{{ item.nome_produto }}</p>
                        </div>
                        <div class="teste">
                            <p class="headerItem">QUANTIDADE:</p>
                            <input type="number" v-model="item.quantidade" placeholder="Quantidade" class="inputAtualizar">
                        </div>
                        <div class="acoes teste">
                            <p>Ações:</p>
                            <button @click="atualizar(item, 'demandas')" class="acao">Atualizar</button>
                            <button @click="deletar(item, 'demandas')" class="acao">EXCLUIR ITEM</button>
                        </div>
                    </div>
                    <div class="item error" v-if="inputPesquisa && !filteredList().length">
                        <p>No results found!</p>
                    </div>
                </div>
            </div>
            <button @click="openModal">Adicionar Demanda</button>
        </section>
        <dialog id="modalAddIten" :open="modalAddIten" v-if="modalAddIten">
            <div class="modalBody">
                <div class="modalHeader">
                    <h2>Adicionar Demanda</h2>
                    <button @click="closeModal">X</button>
                </div>
                <form @submit.prevent="adicionar('demandas/', demanda)">
                    <div class="input-label">
                        <label for="produto">Item:</label>
                        <select name="produto" id="produto" v-model="demanda.produto">
                            <option v-for="item in estoque" :key="item.id" :value="item.id">
                                {{ item.item }}
                            </option>
                        </select>
                    </div>
                    <div class="input-label">
                        <label for="">Quantidade:</label>
                        <input type="number" v-model="demanda.quantidade" placeholder="Quantidade">
                    </div>
                    <button type="submit" class="acao">Adicionar</button>
                </form>
            </div>
        </dialog>
    </main>
</template>

<style scoped>
* {
    color: white;
}

input.inputAtualizar {
    width: 80%;
    border: 0;
    font-size: 12pt;
}

.item {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 2px solid #8C52FF;
    border-radius: 10px;
    padding: 20px;
    gap: 20px;
}

.item > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 12pt;
}

.headerItem {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: nowrap;
}

p.headerItem {
    font-size: 1.2rem;
    text-align: center;
    color: #8C52FF;
    
}

.bodyItem {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    flex-wrap: nowrap;
}

.bodyItem>p,
span {
    font-size: 1.2rem;
    margin-bottom: .5rem;
    margin-top: .5rem;
    text-align: start;
    width: 20%;
}

p.center {
    text-align: center;
}

button.acao {
    width: 100%;
    padding: 0.5rem;
    border-radius: .5rem;
    border: 2px solid #8C52FF;
    background-color: #8C52FF;
    margin-top: .25rem;
    font-size: 16px;
    cursor: pointer;

}

section {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border-radius: .5rem;
    padding: 1rem;
}

section>button {
    width: 50%;
    padding: 0.5rem;
    border-radius: .5rem;
    border: 2px solid #8C52FF;
    background-color: #8C52FF;
    margin-top: 2rem;
    font-size: 16px;
    cursor: pointer;
}

section>button:hover {
    background-color: transparent;
    color: #8C52FF;
    transition: 1s;
}

h2 {
    color: white;
    font-size: 1.8rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

dialog {
    width: 40%;
    margin: auto;
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    background-color: rgb(35 35 35);
    border-radius: .5rem;
    border: 2px solid #8C52FF;
    padding: 1rem;
    position: absolute;
    top: 60%;
}

.modalBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
}
.showModal{
    display: flex;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    padding: 1rem;
    height: 250px;
}

.input-label {
    display: flex;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.input-label2 {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.input-label>label {
    font-size: 1.2rem;
}

input {
    background-color: transparent;
    color: white;
    width: 60%;
    height: 40px;
    padding: 10px;
    text-align: center;
    border: 2px solid #8C52FF;
    border-radius: 1rem;
    /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}

input:focus {
    color: white;
    background-color: transparent;
    outline-color: #8C52FF;
    box-shadow: -3px -3px 15px #8C52FF;
    transition: .1s;
    transition-property: box-shadow;
}

form>button {
    width: 50%;
    margin: auto;
    font-size: 16px;
    height: 40px;
    background-color: #8C52FF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    margin-top: 1rem;
}

.modalHeader {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 1rem;
}

.modalHeader>h2 {
    color: white;
    font-size: 1.8rem;
    margin-top: 2%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.modalHeader>button {
    background-color: transparent;
    color: #8C52FF;
    width: 50px;
    border: 2px solid #8C52FF;
    font-size: 20px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
}

#estoque {
    width: 80%;
    margin: 20px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
}

.rolagemItens {
    width: 100%;
    max-height: 500px;
    overflow-y: scroll;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    ;
    border: 2px solid #8C52FF;
    border-radius: 10px;
}

.input-pesquisa {
    margin: 1rem auto;
}

.input-label > select{
    background-color: transparent;
    color: white;
    width: 60%;
    height: 40px;
    padding: 10px;
    /* text-align: center; */
    border: 2px solid #8C52FF;
    border-radius: 1rem; 
    /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}
select > option{
    background-color: transparent;
    color: black;
    width: 60%;
    height: 40px;
    padding: 10px;
    /* text-align: center; */
    border: 2px solid #8C52FF;
    border-radius: 1rem; 
    /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}
.LoadingDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 4%;
    width: 100%;
}
.LoadingDiv > img{
    width: 100px;
    height: 100px;
}

@media screen and (max-width: 1025px) {
    dialog {
        width: 80%;
        scrollbar-width: none;
        display: flex;
        margin: auto;
        position: fixed;
        top: 20%;
    }

    .item {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
    gap: 20px;
    }

    
    .modalBody {
        height: 350px;
    }

    .item > .teste {
        border-top: 2px solid #8C52FF;
        padding-top: 15px;
        gap: 10px;
    }
    section{
        width: 95%;
    }
    
    .modalBody > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .modalBody > .modalHeader {
        display: flex;
        font-size: 10pt;
    }

    .modalBody > form > .input-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 10px;
    }

    .modalBody > form > .input-label > label, input {
        width: 80%;
        text-align: center;
    }

}
</style>