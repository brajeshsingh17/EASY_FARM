import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
const initialState = {
    isLoading: false,
    productData: [],
    page: 1,
    limit: 1000,
    totalPages: 1,
    totalResults: 0
}
const user = localStorage.getItem('userData');
const token = JSON.parse(user)?.tokens?.access?.token;

export const getAllProduct = createAsyncThunk('product/getAll', async ({pageNo},rejectWithValue) => {
    try {
        const res = await api.get(`products/farmer?limit=1000`, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const getProductById = createAsyncThunk('product/getById', async ({id},rejectWithValue) => {
    try {
        const res = await api.get(`products/${id}`, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});


const farmerProductSlice = createSlice({
    name: 'farmerProduct',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllProduct.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.productData = payload.results;
            state.page = payload.page;
            state.limit = payload.limit;
            state.totalPages = payload.totalPages;
            state.totalResults = payload.totalResults;
        })
        .addCase(getAllProduct.rejected, (state, {payload}) => {
            state = initialState;
        })
    }
})
export default farmerProductSlice.reducer;