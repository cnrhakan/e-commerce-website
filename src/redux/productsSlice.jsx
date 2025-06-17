import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
<<<<<<< HEAD
  inputValue: "",
  addToBasket: [],
=======
>>>>>>> d5490a096bfbe62c920b7536aa8e309f57471808
};

const URL = "https://fakestoreapi.com/products";
export const getProductsData = createAsyncThunk("products", async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
<<<<<<< HEAD
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
=======
  reducers: {},
>>>>>>> d5490a096bfbe62c920b7536aa8e309f57471808
  extraReducers: (builder) => {
    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.products = action.payload;
      /* PENDING */
      /* REJECTED */
    });
  },
});

<<<<<<< HEAD
export const { setInputValue, addToBasket, removeFromBasket } =
  productsSlice.actions;
=======
// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;
>>>>>>> d5490a096bfbe62c920b7536aa8e309f57471808

export default productsSlice.reducer;
