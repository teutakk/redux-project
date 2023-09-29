import {createSlice} from "@reduxjs/toolkit"

const dragonSlice = createSlice({
  name: "dragons",
  initialState: {
    dragons: []
  },

  reducers: {
    setDragons: (state, action) => {
      state.dragons = action.payload;
    },
    reserveDragons: (state, action) => {
      const { id } = action.payload

      state.dragons = state.dragons.map((dragon) => 
        dragon.id === id ? {...dragon, reserved: true} : dragon
      )
    },
    cancelReservation: (state, action) => {
        const { id } = action.payload

        state.dragons = state.dragons.map((dragon) => {
          if (dragon.id !== id) return dragon;
          return { ...dragon, reserved: false };
        });
    }
  },
});

export const {setDragons, reserveDragons, cancelReservation} = dragonSlice.actions;

export default dragonSlice.reducer;