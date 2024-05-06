export default function useFakeBD() {
  let arrayForResponse: number[][];
  let nextIndex: number = 0;

  const generateRandomValueInRange = (min: number, max: number): number => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };
  const randomAmountRows = generateRandomValueInRange(100, 1000);
  const randomAmountItems = generateRandomValueInRange(10, 20);

  const generateRandomRow = (): number[] => {
    const row: number[] = [];
    for (let i = 0; i < randomAmountItems; i++) {
      row.push(generateRandomValueInRange(0, 99));
    }
    return row;
  };
  const fillArray = () => {
    arrayForResponse = [];
    for (let i = 0; i < randomAmountRows; i++) {
      arrayForResponse.push(generateRandomRow());
    }
  };
  fillArray();

  const getNextRows = (amount: number = 1): Promise<{ data: number[][]; length: number }> => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          const response = {
            data: arrayForResponse.slice(nextIndex, nextIndex + amount),
            length: arrayForResponse.length
          };
          nextIndex = nextIndex + amount + 1 > arrayForResponse.length ? 0 : nextIndex + amount;
          resolve(response);
        },
        generateRandomValueInRange(1, 20) * amount
      );
    });
  };

  return {
    getNextRows
  };
}
