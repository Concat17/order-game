import { useAppSelector } from "../redux";
import { selectCells } from "../redux/reducers";
import { Game } from "./Game";
import { StartMenu } from "./StartMenu";

export const Root = () => {
  const cells = useAppSelector(selectCells);
  // return cells.length > 0 ? <Game /> : <StartMenu />;
  return <Game />;
};
