import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
};

const URL = "https://fakestoreapi.com/products";
export const getProductsData = createAsyncThunk("products", async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.products = action.payload;
      /* PENDING */
      /* REJECTED */
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
