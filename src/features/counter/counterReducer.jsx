import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cuenta: 0,
  agenda: [],
};

const counterReducer = createSlice({
  name: "$counter",
  initialState,
  reducers: {
    incrementarPorUno: (state) => {
      // state.cuenta = state.cuenta + 1 // comun
      state.cuenta += 1; // sugar syntax
      state.agenda = [...state.agenda, "sumar"];
    },
    restarPorUno: (state) => {
      state.cuenta -= 1;
      state.agenda = [...state.agenda, "restar"];
    },
    resetearLaCuenta: (state) => {
      state.cuenta = 0;
      state.agenda = [];
    },
    sumarPorProp: (state, action) => {
      state.cuenta += action.payload;
      state.agenda = [...state.agenda, `Se sumo al valor un ${action.payload}`];
    },
  },
});

export const {
  incrementarPorUno,
  restarPorUno,
  resetearLaCuenta,
  sumarPorProp,
} = counterReducer.actions;

export default counterReducer.reducer;
