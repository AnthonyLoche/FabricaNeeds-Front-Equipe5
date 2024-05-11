<script setup>
import store from '@/store/index.js'
import HeaderVue from '@/components/HeaderVue.vue'

</script>

<template>
    <HeaderVue />
    <main>
        <section>
            <div class="helloUser">
                <h2>Olá {{ store.state.usuario }}, Seja bem vindo</h2>
                <h2>Veja aqui suas contribuições:</h2>
            </div>
            <div class="contribuicoes">
                <div class="contribuicao">
                    <table>
                        <tr>
                            <th>Status</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                        <tr>
                            <td>Aprovado</td>
                            <td>Compra de café</td>
                            <td>R$20,00</td>
                            <td>02/05/2024</td>
                        </tr>
                    </table>
                </div>
                <div class="contribuicao">
                    <table>
                        <tr>
                            <th>Status</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                        <tr>
                            <td>Aprovado</td>
                            <td>Compra de café</td>
                            <td>R$20,00</td>
                            <td>02/05/2024</td>
                        </tr>
                    </table>
                </div><div class="contribuicao">
                    <table>
                        <tr>
                            <th>Status</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                        <tr>
                            <td>Aprovado</td>
                            <td>Compra de café</td>
                            <td>R$20,00</td>
                            <td>02/05/2024</td>
                        </tr>
                    </table>
                </div><div class="contribuicao">
                    <table>
                        <tr>
                            <th>Status</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                        <tr>
                            <td>Aprovado</td>
                            <td>Compra de café</td>
                            <td>R$20,00</td>
                            <td>02/05/2024</td>
                        </tr>
                    </table>
                </div><div class="contribuicao">
                    <table>
                        <tr>
                            <th>Status</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                        <tr>
                            <td>Aprovado</td>
                            <td>Compra de café</td>
                            <td>R$20,00</td>
                            <td>02/05/2024</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
section {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border-radius: .5rem;
    padding: 1rem;
}

.helloUser {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1%;
    padding: 1rem;
}

.helloUser>h2 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.contribuicoes {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-height: 400px;
    overflow-y: scroll;
    border-radius: .5rem;
    margin-bottom: 2rem;
}
.contribuicoes::-webkit-scrollbar{
    width: 12px;
    padding: .5rem;
    border-radius: 10px;
}
.contribuicoes::-webkit-scrollbar-thumb{
    background-color: #8C52FF;
    border: 2px solid rgb(35 35 35);
    border-radius: 10px;
    width: 10px;
}
.contribuicoes::-webkit-scrollbar-track{
    background-color: transparent;
    border: 2px solid rgb(35 35 35);
    border-radius: 10px;
}

.contribuicao {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    border-radius: .5rem;
    margin-bottom: 1rem;
}

table {
    width: 100%;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 2px solid #8C52FF;
    border-radius: .5rem;
}

th {
    font-size: 1.2rem;
    padding: 1rem;
    color: #8C52FF;
}

td {
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
}
</style>
