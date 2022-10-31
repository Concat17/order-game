import { UITheme } from "../../types";

export const chooseImageSprites = (theme: UITheme, count: number) => {
  let imageCount = 0;
  switch (theme) {
    case "coin":
      imageCount = 3;
      break;
    case "cookie":
      imageCount = 4;
      break;
    case "winter":
      imageCount = 4;
      break;
    case "flower":
      imageCount = 3;
      break;
  }
  const images = Array.from({ length: count }).map(
    () => Math.floor(Math.random() * imageCount) + 1
  );
  return images;
};
