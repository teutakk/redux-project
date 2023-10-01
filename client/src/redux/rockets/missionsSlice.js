import { createSlice } from "@reduxjs/toolkit";

const missionSlice = createSlice({
  name: "missions",
  initialState: {
    missions: [],
  },

  reducers: {
    setMissions: (state, action) => {
      state.missions = action.payload;
    },
    reserveMissions: (state, action) => {
      const { id } = action.payload;

      state.missions = state.missions.map((mission) =>
        mission.mission_id === id ? { ...mission, reserved: true } : mission
      );
    },
    cancelMissions: (state, action) => {
      const { id } = action.payload;

      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== id) return mission;
        return { ...mission, reserved: false };
      });
    },
  },
});

export const { setMissions, reserveMissions, cancelMissions } =
  missionSlice.actions;

export default missionSlice.reducer;
