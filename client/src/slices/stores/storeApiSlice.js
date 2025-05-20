import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
const storeApiSlice = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:2222/api/store',
    }),
    endpoints: (builder) => ({
        addStore: builder.mutation({
            query: (store) => ({
                url: '/',
                method: 'POST',
                body: store,
            }),
        }),
        updataStore: builder.mutation({
            query: (store) => ({
                url: '/',
                method: 'put',
                body: store,
            }),
        }),
        getListStoreByTotalPrice: builder.mutation({
            query: (cityIdAnsItems) => ({
                url: '/ListStoreByPrice',
                method: 'POST',
                body: cityIdAnsItems,
            }),
        }),
        deleteStore: builder.mutation({
            query: (_id) => ({
                url: `/${_id}`,
                method: 'DELETE',
            }),
        }),
        getStores: builder.query({
            query: () => '',
        }),
        getStoresById: builder.query({
            query: (_id) => `/${_id}`,
        }),
    }),
})
export const { useAddStoreMutation, useUpdataStoreMutation, useGetListStoreByTotalPriceMutation, useDeleteStoreMutation, usegetStoresQuery ,useGetStoresByIdQuery} = storeApiSlice;
export default storeApiSlice;