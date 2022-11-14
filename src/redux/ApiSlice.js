import { createSlice } from '@reduxjs/toolkit'


// bject.freeze = means readonly object 
export const STATUS = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})

const apiSlice = createSlice({
    name: 'Api',

    initialState: {
        data: [],
        status: STATUS.IDLE
    },

    reducers: {
        setProducts(start, action) {
            start.data = action.payload
        },
        setStatus(start, action) {
            start.status = action.payload
        },

    }
})

export const { setProducts, setStatus } = apiSlice.actions
export default apiSlice.reducer;

// thunks 

export function fetchProducts() {
    return async function fetchAPIbyThunks(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            console.log(data)
            dispatch(setProducts(data))
            dispatch(setStatus(STATUS.IDLE))
        } catch (err) {
            console.log(err)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}



