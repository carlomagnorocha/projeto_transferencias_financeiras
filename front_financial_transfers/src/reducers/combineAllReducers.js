import { userSessionReducer } from './userSessionReducer';
import { usersListsReducer } from './usersListsReducer';
import { combineReducers } from 'redux';



export const Reducers = combineReducers({
  userSessionState: userSessionReducer,
  usersListsState: usersListsReducer
});