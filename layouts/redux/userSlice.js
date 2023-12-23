import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        userDetail:{username:"hello"},
        token:""
    },
    reducers:{
        login: (state, action) =>{
            console.log(action.payload.token)
            state.userDetail = action.payload.userDetail;
            state.token = action.payload.token;
        },


    }
});

export const {login} = userSlice.actions;
export default userSlice.reducer;

