import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : 'cart',

    initialState : [],

    reducers:{
        add (start,action){
            start.push(action.payload)
        },
        remove (start,action){
            return start.filter((item)=> item.id !== action.payload)
        }
    }
})

 export const {add,remove} = cartSlice.actions
 export default cartSlice.reducer
