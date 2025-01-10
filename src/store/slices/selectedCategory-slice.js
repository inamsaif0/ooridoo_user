import { createSlice } from "@reduxjs/toolkit";

const selectedCategoryId = createSlice({
    name: "selectedCategoryId",
    initialState: {
        selectedCategory: "",
    },
    reducers: {
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload;
        },
        resetSelectedCategory(state) {
            state.selectedCategory = "";
        },
    },
});

export const { setSelectedCategory, resetSelectedCategory } = selectedCategoryId.actions;
export default selectedCategoryId.reducer;