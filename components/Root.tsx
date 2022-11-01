import { useEffect } from "react";

import { useAppSelector } from "../redux";
import { selectCells } from "../redux/reducers";
import { Game } from "./Game";
import { StartMenu } from "./StartMenu";

export const Root = () => {
  useEffect(() => {
    let audio = new Audio("/christmas.mp3");

    const start = () => {
      audio.play();
    };
  }, []);

  const cells = useAppSelector(selectCells);
  return cells.length > 0 ? <Game /> : <StartMenu />;
};
