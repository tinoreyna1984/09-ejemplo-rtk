import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * RTK Query crea un API a semejanza de un slice visto en RTK.
 * Notar el parecido que tiene a un slice, solo que con otros nombres de variables
 */
export const todosApi = createApi({
    reducerPath: 'todos', // similar a name en slices
    baseQuery: fetchBaseQuery({ // similar al initialState en slices
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({ // similar a los reducers del slice
        getTodos: builder.query({
            query: () => '/todos', // el resultado es el endpoint https://jsonplaceholder.typicode.com/todos
        }),
        getTodo: builder.query({
            query: (id) => `/todos/${id}`,
        }),
    })
});

/**
 * Genera al final custom hooks:
 * getTodos -> useGetTodosQuery
 * En general, algo así como: función -> useFunciónQuery
 */

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;

