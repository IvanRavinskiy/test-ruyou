import { createSlice } from '@reduxjs/toolkit';

import { PALETTE, SLICES } from '../../constants/slices';

export type Colors = {
  id: number;
  color: string;
};

type ColorsState = {
  colors: Colors[];
};

const SLICE_INITIAL: ColorsState = {
  colors: [],
};

const paletteSlice = createSlice({
  name: SLICES.PALETTE,
  initialState: SLICE_INITIAL,
  reducers: {
    [PALETTE.ADD_COLOR](state, action) {
      const id = Date.now();

      state.colors.push({ color: action.payload, id });
    },
    [PALETTE.REMOVE_COLOR](state, action) {
      const objWithIdIndex = state.colors.findIndex(obj => obj.id === action.payload);

      if (objWithIdIndex > -1) {
        state.colors.splice(objWithIdIndex, 1);
      }
    },
    [PALETTE.CHANGE_COLOR](state, action) {
      const objWithIdIndex = state.colors.findIndex(obj => obj.id === action.payload.id);

      if (objWithIdIndex > -1) {
        state.colors[objWithIdIndex] = {
          color: action.payload.currentColor,
          id: action.payload.id,
        };
      }
    },
  },
});

export const { reducer: paletteReducer } = paletteSlice;
export const { ADD_COLOR, REMOVE_COLOR, CHANGE_COLOR } = paletteSlice.actions;
