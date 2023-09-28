import { configureStore } from '@reduxjs/toolkit';
import rocketRedux from './rocketRedux';

const store = configureStore({
    reducer: {
        rockets: rocketRedux,
    }
})

export default store;