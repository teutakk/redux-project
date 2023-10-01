import { createSlice } from "@reduxjs/toolkit";

const rocketSlice = createSlice({
  name: "rockets",
  initialState: {
    rockets: [],
  },
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload;
    },
    reserveRockets: (state, action) => {
      const { id } = action.payload;

      state.rockets = state.rockets.map((rocket) =>
        rocket.id === id ? { ...rocket, reserved: true } : rocket
      );
    },
    cancelReservation: (state, action) => {
      const { id } = action.payload;

      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
    },
  },
});

export const { setRockets, reserveRockets, cancelReservation } =
  rocketSlice.actions;

export default rocketSlice.reducer;
