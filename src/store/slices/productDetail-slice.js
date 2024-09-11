const { createSlice } = require('@reduxjs/toolkit');

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        products: [],
        addcartflag:false
    },
    reducers: {
        setProductsDetail(state, action) {
            state.products = action.payload;
        },

        cartFlagfunction(state, action) {
            console.log('action==>',action.payload)
            state.addcartflag = action.payload;
        }
    },
});

export const { setProductsDetail ,cartFlagfunction } = productDetailSlice.actions;
export default productDetailSlice.reducer;
