<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { carregar } from '@/api/api.js';


const items = ref([]);

carregar('estoque/', items);

const visibleItems = ref([]);
const currentIndex = ref(0);
let interval = null;

const updateVisibleItems = () => {
    const endIndex = currentIndex.value + 4;
    visibleItems.value = items.value.slice(currentIndex.value, endIndex);
    currentIndex.value = endIndex < items.value.length ? endIndex : 0;
};

onMounted(() => {
    updateVisibleItems();
    interval = setInterval(updateVisibleItems, 3500);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<template>
    <router-link to="estoque">
        <h2>Estoque</h2>
        <div id="org">
            <div v-for="(item, index) in visibleItems" :key="index">
                <p>Item: {{ item.item }}</p>
                <p>Quantidade: {{ item.quantidade }}</p>
            </div>
        </div>

    </router-link>
</template>

<style scoped>
a {
    text-decoration: none;
    width: 40%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;
}

a > h2 {
    background-color: #8C52FF;
    width: 100%;
    text-align: center;
    padding: 10px;
    border-radius: 10px 10px 0px 0px;
    
}

#org{
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: nowrap;
    border: 2px solid #8C52FF;
    padding: 10px;
}

#org > div{
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 15px;
    line-height: 2;
    border-bottom: 2px solid #8C52FF;
}

#org > div > p {
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

}


@media screen and (max-width: 1024px) {
    a{
        width: 85%;
    }
    #org > div {
        height: 90px;
    }
}

</style>