<script setup>
import HeaderVue from '@/components/HeaderVue.vue';
import { carregar, adicionar } from '@/api/api.js'
import { ref, reactive } from 'vue'

const itens = ref([])
carregar('estoque/', itens)

const item = reactive({
    item: '',
    quantidade: 0
})

</script>

<template>
    <HeaderVue />
    <main>
        <h2>Estoque</h2>
        <ul>
            <li v-for="item in itens" :key="item.id">
                <p> ID: {{ item.id }}</p>
                <p> Item: {{ item.item }}</p>
                <p> Quantidade: {{ item.quantidade }}</p>
            </li>
        </ul>
        <br>
        <h2>
            Adicionar Item
        </h2>
        <form action="" method="post" @submit.prevent>
            <label for="">Item</label>
            <input type="text" v-model="item.item" placeholder="Item">
            <label for="">Quantidade</label>
            <input type="number" v-model="item.quantidade" placeholder="Quantidade">
            <button @click="adicionar('estoque/', item)">Adicionar</button>
        </form>
    </main>
</template>

<style scoped>
* {
    color: white;
}
</style>