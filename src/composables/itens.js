import { onMounted, onUnmounted, ref } from 'vue';

export async function loadItens(){
    onMounted(async () => {
        await loadItens()
        updateVisibleItems()
        interval.value = setInterval(updateVisibleItems, 3500)
      });
      onUnmounted(() => {
        clearInterval(interval)
      });
}