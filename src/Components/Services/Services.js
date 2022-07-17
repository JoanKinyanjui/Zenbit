import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
      AddUsers: builder.mutation({
      query: users=>({
       url :'/users',
       method:'POST',
       body: users
      })
      }),
    }),
  })
  
  export const { useAddUsersMutation } = usersApi;

