import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
 name:"Todo",
 initialState:{
    value:[],
    id:0,
 },
 reducers:{
    add:(state,action)=>{
        state.value.push(action.payload)
    },
    remove:(state,action)=>{
      state.value = state.value.filter(x=>x.id !== action.payload)
    }


 }
})
export const { add,remove } = TodoSlice.actions

export default TodoSlice.reducer