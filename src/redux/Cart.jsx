import { createSlice } from '@reduxjs/toolkit'

const INITIA_STATE = {
    cartList:[],
    
}

const cartSlice = createSlice({
    name: "cart",
    initialState:INITIA_STATE,
    reducers: {
        addToCart:(state, action)=> {
           const itemExist = state.cartList.find((item) => item.id === action.payload.id)
            state.cartList.push({
                ...action.payload,
                count:1,
            })
        },
        increment:(state, action)=> {
           const productID =  action.payload 
           state.cartList.forEach((item)=> {
            if(item.id === productID){
                item.count++;
            }
           })
        },
        decrement: (state, action)=> {
            const productID =  action.payload 
            state.cartList.forEach((item)=> {
             if(item.id === productID){
                 item.count--;
             }
            })
        },
        
    }

})

export const { addToCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;