import { ApiSlice } from "./ApiSlice";

const USERS_URL = `${process.env.BASE_URL}/api/users`

export const UserApiSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation} = UserApiSlice