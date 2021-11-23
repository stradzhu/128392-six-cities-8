import {combineReducers} from 'redux';
import {dataReducer} from './data-reducer';
import {mainReducer} from './main-reducer';
import {userReducer} from './user-reducer';

export enum NameSpace {
  data = 'DATA',
  main = 'MAIN',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: dataReducer,
  [NameSpace.main]: mainReducer,
  [NameSpace.user]: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
