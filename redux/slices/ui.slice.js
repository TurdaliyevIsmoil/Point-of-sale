import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  add_product_modal: false,
  success_modal: false,
  loading: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state) => ({
      ...state,
      add_product_modal: true,
    }),
    closeModal: (state) => ({
      ...state,
      add_product_modal: false,
    }),
    openSuccessModal: (state) => ({
      ...state,
      success_modal: true,
    }),
    closeSuccessModal: (state) => ({
      ...state,
      success_modal: false,
    }),
    startLoading: (state) => ({
      ...state,
      loading: true,
    }),
    endLoading: (state) => ({
      ...state,
      loading: false,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  openModal,
  closeModal,
  endLoading,
  startLoading,
  closeSuccessModal,
  openSuccessModal,
} = uiSlice.actions;

export default uiSlice.reducer;
