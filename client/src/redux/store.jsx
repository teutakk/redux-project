import dragonSlice from "./slices/dragonSlice";
import thunk from 'redux-thunk';
const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer: {
        dragons: dragonSlice,
        // missions: missionSlice,
        // rockets: rocketSlice,
    },
    middleware: [thunk]

});

export default store;

