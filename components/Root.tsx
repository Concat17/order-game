import { useEffect } from "react";

import { useAppSelector } from "../redux";
import { selectCells } from "../redux/reducers";
import { Game } from "./Game";
import { StartMenu } from "./StartMenu";

export const Root = () => {
  useEffect(() => {
    //bg sound
    // let audio = new Audio("...");
    // audio.play();
  }, []);

  const cells = useAppSelector(selectCells);
  return cells.length > 0 ? <Game /> : <StartMenu />;
};
