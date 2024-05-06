<template>
  <RowsComponent :data-array="myArray" ref="arrayContainer" />
</template>

<script setup lang="ts">
import { useElementBounding, useWindowSize, watchDebounced } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import RowsComponent from '@components/RowsComponent.vue';
import useArrayData from '@composables/useArrayData';

const { addNewRow, arrayIsFull, myArray, loading } = useArrayData();
const arrayContainer = ref<HTMLElement | null>(null);
const amountRow = ref<number>();
let computeAmount = true;

const arrayContainerRect = useElementBounding(arrayContainer);
const windowSize = useWindowSize();

watchDebounced(
  arrayContainerRect.bottom,
  () => {
    if (!loading.value && computeAmount && !arrayIsFull.value) {
      console.log(arrayContainerRect.height.value);
      amountRow.value = Math.ceil(windowSize.height.value / arrayContainerRect.height.value) * 2;
      addNewRow(amountRow.value);
      computeAmount = false;
    }
    const percentOutOfBotScreen = Math.ceil(
      ((arrayContainerRect.bottom.value - windowSize.height.value) / windowSize.height.value) * 100
    );
    if (percentOutOfBotScreen < 100 && !arrayIsFull.value) {
      addNewRow(amountRow.value);
    }
  },
  { debounce: 1000, maxWait: 1000 }
);

onMounted(() => {
  addNewRow();
});
</script>
