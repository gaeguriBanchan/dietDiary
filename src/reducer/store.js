import { configureStore } from "@reduxjs/toolkit";

// 로컬스토리지 저장 라이브러ㅣ
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

import userSlice from "./userSlice";
const reducers = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const presistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: presistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
