// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist"; // Ensure correct import

const persistConfig = {
    key: 'root',
    storage,
};

// Wrap the counterReducer directly, no need for nesting in an object
const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
    reducer: {
        counter: persistedReducer, // Use an object to combine reducers if needed
    },
});

export const persistor = persistStore(store);
