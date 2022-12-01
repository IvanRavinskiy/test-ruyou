import { combineReducers } from '@reduxjs/toolkit';

import { paletteReducer } from './palette';

export const rootReducer = combineReducers({
  palette: paletteReducer,
});
