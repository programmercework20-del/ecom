// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Async thunk for fetching products
// export const fetchProducts = createAsyncThunk(
//   'api/fetchProducts',
//   async () => {
//     const response = await fetch('http://192.168.1.17/ecom/public/api/products');
//     const data = await response.json();
//     // Handle the API response structure
//     return data.status ? data.data : [];
//   }
// );

// const initialState = {
//   products: [],
//   status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
// };

// export const apiSlice = createSlice({
//   name: 'api',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default apiSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'api/fetchProducts',
  async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products`
    );

    const data = await response.json();
    return data.status ? data.data : [];
  }
);

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
