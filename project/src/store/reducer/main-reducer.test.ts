import {mainReducer, initialState} from './main-reducer';
import {changeCity, changeSortType} from '../actions/action';
import {ALL_CITY_LIST, SortTypes} from '../../consts';

describe('Reducer: mainReducer', () => {
  it('should change sort type', () => {
    expect(mainReducer(initialState, changeSortType(SortTypes.PriceUp)))
      .toEqual({...initialState, currentSortType: SortTypes.PriceUp});
  });

  it('should change active city', () => {
    expect(mainReducer(initialState, changeCity(ALL_CITY_LIST[2])))
      .toEqual({...initialState, activeCity: ALL_CITY_LIST[2]});
  });

  it('on an unknown actions should return initial state', () => {
    expect(mainReducer(initialState, {type: 'UNKNOWN_ACTION', payload: 'lorem ipsum'}))
      .toEqual(initialState);
  });
});
