import { shuffle } from "../../utils";

export const generateOrder = (
  count: number,
  sort: "ascending" | "descending",
  range?: number
) => {
  const values = range ? generateNumbersRange(range) : generateLettersRange();

  const shuffledNumbers = shuffle<number | string>(values);
  const pickedValues = shuffledNumbers.slice(0, count);

  const sorted = pickedValues.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
  });

  return sort === "ascending" ? sorted : sorted.reverse();
};

const generateNumbersRange = (range: number) => {
  const start = 1;
  const end = range;

  return Array.from({ length: end - start + 1 }, (_, i) => i + 1);
};
const generateLettersRange = () => {
  const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
  return alphabet.split("");
};
