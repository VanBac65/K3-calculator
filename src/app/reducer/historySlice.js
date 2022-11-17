import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
    name: 'history',
    initialState: [],
    reducers: {
        ADD_CAL(state, action) {
            state.push(action.payload)
        }
    }
})

export const { actions, reducer } = historySlice
export const { ADD_CAL } = actions