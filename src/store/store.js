import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter/counterSlice'
import pokemonReducer from '../slices/pokemon/pokemonSlice'
import { todosApi } from '../slices/todos/todosApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  // para el RTK Query API se requiere el middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosApi.middleware),
})
