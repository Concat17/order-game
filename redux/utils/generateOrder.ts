import { shuffle } from "../../utils";

export const generateOrder = (
  range: number | string,
  count: number,
  sort: "ascending" | "descending"
) => {
  const rangeValues = generateRange(range);

  const shuffledNumbers = shuffle(rangeValues);
  const pickedValues = shuffledNumbers.slice(0, count);

  return sort === "ascending"
    ? pickedValues.sort()
    : pickedValues.sort().reverse();
};

const generateRange = (range: string | number) => {
  if (typeof range === "number") {
    const start = 1;
    const end = range;

    return Array.from({ length: end - start + 1 }, (_, i) => i + 1);
  }
  const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
  const letters = alphabet.split("");
  return letters;
};
