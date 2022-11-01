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
  theme: UITheme;
  sort: "ascending" | "descending";
}

const initialState: GameState = {
  cells: [],
  elements: [],
  theme: "cookie",
  sort: "ascending",
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    generateGame: (state, action: PayloadAction<GameParams>) => {
      const { range, count, sort } = action.payload;

      const order = generateOrder(count, sort, range);

      const theme = chooseUITheme();

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

      state.cells = cells;
      state.elements = elements;

      state.theme = theme;
      state.sort = sort;
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
    restart: () => initialState,
  },
});

export const { generateGame, putElementToCell, restart } = boardSlice.actions;

export const selectElements = (state: RootState) => state.game.elements;
export const selectCells = (state: RootState) => state.game.cells;
export const selectUITheme = (state: RootState) => state.game.theme;
export const selectElementById = (state: RootState, id: string) =>
  state.game.elements.find((el) => el.id === id);
export const selectIsWin = (state: RootState) =>
  state.game.cells.every((c) => !!c.elementId);
export const selectSort = (state: RootState) => state.game.sort;

export default boardSlice.reducer;
