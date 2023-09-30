import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rocketRedux from "./rocketRedux";
import dragonSlice from "./dragonSlice";
import missionsSlice from "./missionsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  rockets: rocketRedux,
  dragons: dragonSlice,
  missions: missionsSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
