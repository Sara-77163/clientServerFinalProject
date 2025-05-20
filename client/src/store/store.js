import { configureStore } from '@reduxjs/toolkit';
import userApiSlice from '../slices/users/userApiSlice';
import storeApiSlice from '../slices/stores/storeApiSlice';
const store=configureStore({
    reducer:{
        [userApiSlice.reducerPath]:userApiSlice.reducer,
        [storeApiSlice.reducerPath]:storeApiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(userApiSlice.middleware,storeApiSlice.middleware),
})

//setupListeners(store.dispatch);
export default store;