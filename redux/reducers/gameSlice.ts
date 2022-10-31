import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shuffle } from "../../utils";
import { RootState } from "../store";
import { generateOrder } from "../utils";

export type OrderCellType = {
  id: string;
  elementId?: string;
  value: string | number;
};

export type OrderElementType = {
  id: string;
  inCell?: boolean;
  value: string | number;
  imgPath: string;
};

export type GameParams = {
  range: string | number;
  count: number;
  sort: "ascending" | "descending";
};

interface GameState {
  cells: OrderCellType[];
  elements: OrderElementType[];
  order: Array<string | number>;
}

// const initialState: GameState = {
//   cells: [
//     { id: "1", value: 1 },
//     { id: "2", value: 2 },
//     { id: "3", value: 3 },
//     { id: "4", value: 4 },
//     { id: "5", value: 5 },
//   ],
//   elements: [
//     { id: "1", value: 1 },
//     { id: "2", value: 2 },
//     { id: "3", value: 3 },
//     { id: "4", value: 4 },
//     { id: "5", value: 5 },
//   ],
//   order: [1, 2, 3, 4, 5],
// };

const initialState: GameState = { cells: [], elements: [], order: [] };

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    generateGame: (state, action: PayloadAction<GameParams>) => {
      const { range, count, sort } = action.payload;

      const order = generateOrder(range, count, sort);

      //TODO: make image picing more random?
      const images = shuffle([1, 2, 3, 4]);

      const elements = shuffle(order).map((v, i) => ({
        id: v.toString(),
        value: v,
        imgPath: `/images/themes/cookie/element-${
          i > images.length - 1 ? images[images.length - 1] : images[i]
        }.png`,
      }));

      const cells = order.map((v) => ({
        id: v.toString(),
        value: v,
      }));

      console.log("elements", elements);
      console.log("cells", cells);

      state.cells = cells;
      state.elements = elements;
      //TODO: remove?
      state.order = order;
    },
    putElementToCell: (
      state,
      action: PayloadAction<{ elementId: string; cellId: string }>
    ) => {
      const { cellId, elementId } = action.payload;
      const cell = state.cells.find((c) => c.id === cellId);
      const element = state.elements.find((e) => e.id === elementId);

      if (!cell || !element) return;
      if (cell.value !== element.value) return;
      cell.elementId = elementId;
      element.inCell = true;
    },
  },
});

export const { generateGame, putElementToCell } = boardSlice.actions;

export const selectElements = (state: RootState) => state.game.elements;
export const selectCells = (state: RootState) => state.game.cells;

export default boardSlice.reducer;
