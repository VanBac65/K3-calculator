import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
    name: 'display',
    initialState: {
        display: '',
        history: []
    },
    reducers: {
        CAL_VALUE(state, action) {
            state.display += action.payload
            return state
        },
        DEL_VALUE(state) {
            return {
                ...state, display: ''
            }
        },
        VALUE(state, action) {
            return {
                ...state, display: `${eval(action.payload)}`
            }
        }
    }
})

export const { actions, reducer } = displaySlice
export const { CAL_VALUE, DEL_VALUE, VALUE } = actions