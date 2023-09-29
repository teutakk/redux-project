import { configureStore } from '@reduxjs/toolkit';
import rocketRedux from './rocketRedux';
import dragonSlice from './dragonSlice';

const store = configureStore({
    reducer: {
        rockets: rocketRedux,
        dragons: dragonSlice,
    }
})

export default store;