import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[],
  searchTeam:"",
  filteredData:[]
}
const productSlice = createSlice({
  name:'products',
  initialState,
  reducers:{
    setProducts(state,action){
      state.products = action.payload 
    },
    setSearchTeam(state,action){
      state.searchTeam = action.payload
      state.filteredData = state.products.filter(product =>
        product.name.toLowerCase().includes(state.searchTeam.toLowerCase())

      )
    }
  }
})
export const {setProducts, setSearchTeam}= productSlice.actions;
export default productSlice.reducer