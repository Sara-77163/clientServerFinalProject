import { configureStore } from '@reduxjs/toolkit';
import userApiSlice from '../slices/users/userApiSlice';
const store=configureStore({
    reducer:{
        [userApiSlice.reducerPath]:userApiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(userApiSlice.middleware),
})

//setupListeners(store.dispatch);
export default store;