import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ()=>{
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products
  }
)




const initialState = {
  products:[],
  searchTeam:"",
  filteredData:[],
  loading:false,
  error:null,
};
const productSlice = createSlice({
  name:'products',
  initialState,
  reducers:{
    setProducts(state,action){
      state.products = action.payload ;
      state.filteredData = action.payload;
    },
    setSearchTeam(state,action){
      state.searchTeam = action.payload
      state.filteredData = state.products.filter((product) =>
        product.title.toLowerCase().includes(state.searchTeam.toLowerCase())

      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

})
export const {setProducts, setSearchTeam}= productSlice.actions;
export default productSlice.reducer