import { UITheme } from "../../types";
import { shuffle } from "../../utils";

export const chooseUITheme = () => {
  const themes: UITheme[] = ["coin", "cookie", "winter", "flower"];

  return shuffle(themes)[0];
};
