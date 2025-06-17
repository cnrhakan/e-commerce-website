import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  inputValue: "",
  addToBasket: [],
};

const URL = "https://fakestoreapi.com/products";
export const getProductsData = createAsyncThunk("products", async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addToBasket: (state, action) => {
      const existingItem = state.addToBasket.find(
        (item) => item.id == action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.addToBasket.push(action.payload);
      }
    },

    removeFromBasket: (state, action) => {
      state.addToBasket = state.addToBasket.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.products = action.payload;
      /* PENDING */
      /* REJECTED */
    });
  },
});

export const { setInputValue, addToBasket, removeFromBasket } =
  productsSlice.actions;

export default productsSlice.reducer;
