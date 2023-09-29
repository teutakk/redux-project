import dragonSlice from "./slices/dragonSlice";
const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer: {
        dragons: dragonSlice,
        // missions: missionSlice,
        // rockets: rocketSlice,
    }

});

export default store;

