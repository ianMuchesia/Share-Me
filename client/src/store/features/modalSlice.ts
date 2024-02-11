import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalData = {
  image?: string;
  prompt: string;
  username: string;
};

type ModalSliceState = {
  isOpen: boolean;
  modalType: string;
  modalData: ModalData;
};

type OpenModalPayload = {
  modalType: string;
  modalData: ModalData;
};

const initialState: ModalSliceState = {
  isOpen: false,
  modalType: "",
  modalData: {
    image: "",
    prompt: "",
    username: "",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<OpenModalPayload>) => {
      state.isOpen = true;
      state.modalType = action.payload.modalType;
      state.modalData = action.payload.modalData;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
