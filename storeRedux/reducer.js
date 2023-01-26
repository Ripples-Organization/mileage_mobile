import { combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import dashboardSlice from './features/dashboard/dashBoardSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appReducer = combineReducers({
  auth: authSlice,
  dashboard: dashboardSlice,
});

const rootReducer = (state, action) => {
  if (action.type === 'example/logout') {
    // this applies to all keys defined in persistConfig(s)
    AsyncStorage.removeItem('persist:root');
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;