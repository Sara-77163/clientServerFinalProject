import apiSlice from "../apiSlice";
const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
            login: builder.mutation({
                query: (credentials) =>( 
                       {  
                    url: 'auth/login',
                    method: 'POST',
                    body: credentials,
                }
            )
                 ,
            }),
            register:builder.mutation({
            query: (user)=>({
                url: 'auth/register',
                method: 'POST',
                body: user,
            })
        }),
        addUser:builder.mutation({
            query: (user)=>({
                url: 'users/',
                method: 'POST',
                body: user,
            })
        }),
        updateUser:builder.mutation({
            query: (user)=>({
                url: `users/`,
                method: 'PUT',
                body: user,
            })
        }),
        deleteUser:builder.mutation({
            query: (_id)=>({
                url: `users/${_id}`,
                method: 'DELETE',
            })
        }),
        getUsers:builder.query({
            query: () => 'users',
          })
        })
    })
export const { useLoginMutation, useRegisterMutation, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation, useGetUsersQuery } = userApiSlice;
