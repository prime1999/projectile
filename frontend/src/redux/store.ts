import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/ApiSlice";
import AuthSliceReducer from "@/redux/slices/AuthSlice";

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: AuthSliceReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
