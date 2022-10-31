import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UITheme } from "../../types";
import { shuffle } from "../../utils";
import { RootState } from "../store";
import { chooseImageSprites, chooseUITheme, generateOrder } from "../utils";

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
  range?: number;
  count: number;
  sort: "ascending" | "descending";
};

interface GameState {
  cells: OrderCellType[];
  elements: OrderElementType[];
  order: Array<string | number>;
  theme: UITheme;
}

const initialState: GameState = {
  cells: [],
  elements: [],
  order: [],
  theme: "cookie",
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    generateGame: (state, action: PayloadAction<GameParams>) => {
      const { range, count, sort } = action.payload;

      const order = generateOrder(count, sort, range);

      const theme = chooseUITheme();

      //TODO: make image picing more random?
      const images = chooseImageSprites(theme, count);

      const elements = shuffle(order).map((v, i) => ({
        id: v.toString(),
        value: v,
        imgPath: `/images/themes/${theme}/element-${
          i > images.length - 1 ? images[images.length - 1] : images[i]
        }.png`,
      }));

      const cells = order.map((v) => ({
        id: v.toString(),
        value: v,
      }));

      // console.log("elements", elements);
      // console.log("cells", cells);

      state.cells = cells;
      state.elements = elements;
      //TODO: remove?
      state.order = order;
      state.theme = theme;
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
export const selectUITheme = (state: RootState) => state.game.theme;

export default boardSlice.reducer;
