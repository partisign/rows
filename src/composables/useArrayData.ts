import { ref } from 'vue';
import useFakeBD from '@composables/useFakeBD';

const { getNextRows } = useFakeBD();
const myArray = ref<number[][]>([]);
const loading = ref<boolean>(false);
const arrayIsFull = ref<boolean>(false);
const addNewRow = async (amount: number = 1) => {
  loading.value = true;
  const { data, length } = await getNextRows(amount);
  loading.value = false;
  myArray.value = myArray.value.concat(data);
  arrayIsFull.value = length > myArray.value.length ? false : true;
  console.log(length, myArray.value.length);
};

export default function useArrayData() {
  return {
    addNewRow,
    arrayIsFull,
    myArray,
    loading
  };
}
