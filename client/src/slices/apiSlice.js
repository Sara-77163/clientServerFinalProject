import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:2222/api/'}),
    credentials: 'include',
    
    prepareHeaders: (headers, { getState }) => {
       console.log("prepareHeaders נקראת");
        const token = getState().user.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
    endpoints:() => ({}),

})
export default apiSlice;