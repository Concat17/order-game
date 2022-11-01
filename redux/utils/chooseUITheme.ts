import { UITheme } from "../../types";
import { shuffle } from "../../utils";

export const chooseUITheme = () => {
  // const themes: UITheme[] = ["coin", "cookie", "winter", "flower"];
  const themes: UITheme[] = ["coin"];

  return shuffle(themes)[0];
};
