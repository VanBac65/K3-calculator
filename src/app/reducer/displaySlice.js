import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
    name: 'display',
    initialState: '',
    reducers: {
        CAL_VALUE(state, action) {
            state += action.payload
            return state
        },
        DEL_VALUE() {
            return ''
        },
        VALUE(_, action) {
            return `${eval(action.payload)}`

        }
    }
})

export const { actions, reducer } = displaySlice
export const { CAL_VALUE, DEL_VALUE, VALUE } = actions