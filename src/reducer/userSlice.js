/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    miAddress: "",
    miAge: 0,
    miEndTime: "",
    miGen: null,
    miGoalKg: 0,
    miHard: 1,
    miId: "",
    miImg: "",
    miKcal: 0,
    miName: "",
    miSeq: 0,
    miStartTime: "",
    miStatus: 0,
    miTall: 0,
    miToken: "token1",
    miWater: 0,
    miWeight: 0,
  },
  reducers: {
    logIn: (state, action) => {
      // console.log("store action : ", action);
      // console.log("store action : ", action.payload);
      state.miAddress = action.payload.miAddress;
      state.miAge = action.payload.miAge;
      state.miEndTime = action.payload.miEndTime;
      state.miGen = action.payload.miGen;
      state.miGoalKg = action.payload.miGoalKg;
      state.miHard = action.payload.miHard;
      state.miId = action.payload.miId;
      state.miImg = action.payload.miImg;
      state.miKcal = action.payload.miKcal;
      state.miName = action.payload.miName;
      state.miSeq = action.payload.miSeq;
      state.miStartTime = action.payload.miStartTime;
      state.miStatus = action.payload.miStatus;
      state.miTall = action.payload.miTall;
      state.miToken = action.payload.miToken;
      state.miWater = action.payload.miWater;
      state.miWeight = action.payload.miWeight;
    },
    updateHard: (state, action) => {
      // console.log("updateHard : ", action.payload);
      state.miHard = action.payload;
    },
    updateKcal: (state, action) => {
      state.miKcal = action.payload;
    },
    updateGoalKg: (state, action) => {
      state.miGoalKg = action.payload;
    },
    updateWater: (state, action) => {
      state.miWater = action.payload;
    },
    updateWeight: (state, action) => {
      state.miWeight = action.payload;
    },

    logOut: (state, action) => {
      state.miAddress = "";
      state.miAge = 0;
      state.miEndTime = "";
      state.miGen = "";
      state.miGoalKg = 0;
      state.miHard = 1;
      state.miId = "";
      state.miImg = "";
      state.miKcal = 0;
      state.miName = "";
      state.miSeq = 0;
      state.miStartTime = "";
      state.miStatus = 0;
      state.miTall = 0;
      state.miToken = "";
      state.miWater = 0;
      state.miWeight = 0;
    },
  },
});
export default userSlice;
// deStructuring(교재참조)
export const {
  logIn,
  logOut,
  updateHard,
  updateKcal,
  updateGoalKg,
  updateWater,
  updateWeight,
} = userSlice.actions;
