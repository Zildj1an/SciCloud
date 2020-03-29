import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";

import stored from "./reducers";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["authReducer", "userReducer"]
}

const persistedReducer = persistReducer(persistConfig, stored);

export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
  let persistor = persistStore(store)
  return { store, persistor }
}
