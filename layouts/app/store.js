import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/userSlice';
import questionReducer from '../redux/questionSlice';
const store= configureStore ({
    reducer: {
        user: userReducer,
        question:questionReducer
    },
});
export default store;



































