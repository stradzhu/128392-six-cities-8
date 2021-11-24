import {combineReducers} from 'redux';
import {dataReducer} from './data-reducer';
import {mainReducer} from './main-reducer';
import {userReducer} from './user-reducer';

export enum NameSpace {
  Data = 'DATA',
  Main = 'MAIN',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataReducer,
  [NameSpace.Main]: mainReducer,
  [NameSpace.User]: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
