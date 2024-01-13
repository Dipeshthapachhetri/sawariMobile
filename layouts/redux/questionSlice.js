import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name:"question",
    initialState:{
        questionDetail:{},
        
    },
    reducers:{
        addQuestion: (state, action) =>{
            console.log(action.payload.token)
            state.questionDetail = action.payload.questionDetail;
        },
    }
});

export const {addQuestion} = questionSlice.actions;
export default questionSlice.reducer;

