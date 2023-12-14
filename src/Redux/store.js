import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../Redux/counter/counterSlice'
export default configureStore({
    reducer: {
        Todo: TodoReducer,
    },
  })