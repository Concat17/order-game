import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type OrderCell = {
  id: string;
  elementId?: string;
};

type OrderElement = {
  id: string;
  inCell?: boolean;
};

interface GameState {
  cells: OrderCell[];
  elements: OrderElement[];
}

const initialState: GameState = {
  cells: [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ],
  elements: [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    putElementToCell: (
      state,
      action: PayloadAction<{ elementId: string; cellId: string }>
    ) => {
      const { cellId, elementId } = action.payload;
      const cell = state.cells.find((c) => c.id === cellId);
      const element = state.elements.find((e) => e.id === elementId);

      if (!cell || !element) return;
      cell.elementId = elementId;
      element.inCell = true;
    },
  },
});

export const { putElementToCell } = boardSlice.actions;

export const selectElements = (state: RootState) => state.game.elements;
export const selectCells = (state: RootState) => state.game.cells;

export default boardSlice.reducer;
