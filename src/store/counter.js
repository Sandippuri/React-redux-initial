import { createSlice,} from "@reduxjs/toolkit";

const counterState ={
    counter:0
}

const counterSlice = createSlice({
    name:'counter',
    initialState:counterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        decrement(state){
            state.counter--;
        },
        reset(state){
            state.counter=0;
        }
    }
})

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;

