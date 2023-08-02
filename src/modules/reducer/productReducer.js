import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { toast } from 'react-toastify'
const initialState = {
    isLoading: false,
    productData: [],
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0
}
const user = localStorage.getItem('userData');
const token = JSON.parse(user)?.tokens?.access?.token;
export const addProduct = createAsyncThunk('product/addProduct', async ({ data }, rejectWithValue) => {
    try {
        const res = await api.post('products', data, {
            headers: {
                Authorization: "Bearer " + token,
            }
        });
        toast.success('Product Added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log(res.data)
        return res.data;

    } catch (err) {
        toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log(err)
        return rejectWithValue(err);
    }
});

export const updateProduct = createAsyncThunk('product/addProduct', async ({ data , id}, rejectWithValue) => {
    try {
        const res = await api.patch(`products/${id}`, data, {
            headers: {
                Authorization: "Bearer " + token,
            }
        });
        toast.success('Product Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log(res.data)
        return res.data;

    } catch (err) {
        toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log(err)
        return rejectWithValue(err);
    }
});

export const getAllProduct = createAsyncThunk('product/getAll', async ({pageNo},rejectWithValue) => {
    try {
        const res = await api.get(`products?page=${pageNo}`, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const getAllProductForRent = createAsyncThunk('product/getAllForRent', async ({},rejectWithValue) => {
    try {
        const res = await api.get(`products?limit=1000`, {
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

export const deleteProduct = createAsyncThunk('product/delete', async ({id}, rejectWithValue) => {
    try{
        const res = await api.delete(`products/${id}`,{
            headers : {
                Authorization: "Bearer "+token,
            }
        });
        toast.success('Product deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return id ;
    }catch(err){
        return rejectWithValue(err);
    }
});

const productSlice = createSlice({
    name: 'product',
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
        .addCase(getAllProductForRent.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(getAllProductForRent.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.productData = payload.results;
                state.page = payload.page;
                state.limit = payload.limit;
                state.totalPages = payload.totalPages;
                state.totalResults = payload.totalResults;
            })
            .addCase(getAllProductForRent.rejected, (state, {payload}) => {
                state = initialState;
            })
            .addCase(deleteProduct.fulfilled, (state, {payload}) =>{
                state.productData = state.productData.filter(({id}) => id !== payload)
            })
            
    }
})
export default productSlice.reducer;