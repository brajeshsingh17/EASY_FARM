import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './authReducer';
import productReducer from './productReducer'
import farmerProductReducer from "./farmerProductReducer";

const reducer = combineReducers({
    auth: authReducer,
    product : productReducer,
    farmerProduct : farmerProductReducer,
})

export default reducer;