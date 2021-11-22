import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../consts';
import {MainState} from '../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType} from '../actions/action';

const initialState: MainState = {
  activeCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT_TYPE,
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortType, (state: MainState, action) => {
      state.currentSortType = action.payload;
    })
    .addCase(changeCity, (state: MainState, action) => {
      state.activeCity = action.payload;
    });
});
