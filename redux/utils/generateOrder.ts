import { shuffle } from "../../utils";
// TODO: put "ascending" | "descending", to type file
export const generateOrder = (
  count: number,
  sort: "ascending" | "descending",
  range?: number
) => {
  const values = range ? generateNumbersRange(range) : generateLettersRange();

  const shuffledNumbers = shuffle<number | string>(values);
  const pickedValues = shuffledNumbers.slice(0, count);

  return sort === "ascending"
    ? pickedValues.sort()
    : pickedValues.sort().reverse();
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
