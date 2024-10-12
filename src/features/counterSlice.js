// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    cachedValue: null,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.cachedValue = state.value; // Update cachedValue on increment
        },
        decrement: (state) => {
            state.value -= 1;
            state.cachedValue = state.value; // Update cachedValue on decrement
        },
        reset:(state) =>{
            state.value = 0;
            state.cachedValue = state.value;
        },
        // StorInputvalue:(state, action) =>{
        //     state.value = action.payload.value
        //     state.cachedValue = state.value;
        // }
    },
});

export const { increment, decrement, reset, StorInputvalue } = counterSlice.actions;

export default counterSlice.reducer;
