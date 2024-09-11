import { configureStore } from "@reduxjs/toolkit";
import EvaluateSlice from "./EvaluateSlice";
const store = configureStore({
  reducer: {
    expressionReducer: EvaluateSlice,
  },
});

export default store;