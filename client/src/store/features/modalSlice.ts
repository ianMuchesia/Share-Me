import { PayloadAction } from '@reduxjs/toolkit';
import { PostType } from "@/@types/post";
import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
    name: string;
    isOpen: boolean;
    data: PostType | null;
}

interface OpenModalPayload {
    name: string;
    data: PostType;
}

const initialModalState: ModalState = {
    name: "",
    isOpen: false,
    data: null
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        openModal(state, action: PayloadAction<OpenModalPayload>) {
            state.name = action.payload.name
            state.data = action.payload.data
            state.isOpen = true
        },
        closeModal(state) {
            state.isOpen = false
            state.data = null
            state.name = ""
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer 