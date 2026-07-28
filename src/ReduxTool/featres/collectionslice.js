import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState ={
    items:JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice =createSlice({
    name:"collection",
    initialState,
    reducers:{
        addCollection: (state, action) => {
            const alreadyExisted = state.items.find(item => item.id === action.payload.id);
            if(!alreadyExisted)
            {
               state.items.push(action.payload);
               localStorage.setItem('collection',JSON.stringify(state.items));
               toast.success('Added to Collection');
            } else {
               toast.info('Already in Collection');
            }
          
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('collection',JSON.stringify(state.items));
            toast.error('Removed from Collection');
        },
        clearCollection:(state,action)=>{
            state.items=[]
            localStorage.removeItem('collection');
            toast.info('Collection Cleared');
        }
    }
})
export const{addCollection,removeCollection,clearCollection}= collectionSlice.actions
export default collectionSlice.reducer