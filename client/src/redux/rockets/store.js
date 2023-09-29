import { configureStore } from "@reduxjs/toolkit";
import rocketRedux from "./rocketRedux";
import dragonSlice from "./dragonSlice";
import missionsSlice from "./missionsSlice";

const store = configureStore({
  reducer: {
    rockets: rocketRedux,
    dragons: dragonSlice,
    missions: missionsSlice,
  },
});

export default store;
