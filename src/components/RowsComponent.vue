<template>
  <div class="mx-auto border-black">
    <div class="flex-col bg-slate-300 rounded-md">
      <div v-for="(row, index) in props.dataArray" :key="`${index}_${row[0]}`" class="p-2">
        <div class="p-2 flex justify-between gap-4">
          <div
            v-for="(item, index) in row"
            :key="`${index}_${item}`"
            class="p-1 rounded-md bg-teal-700 flex-grow basis-0 text-center text-sm font-semibold text-white hover:scale-80 transition ease-in-out delay-100 cursor-pointer"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  dataArray: number[][];
}>();
</script>
