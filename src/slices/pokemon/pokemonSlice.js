import { createSlice } from '@reduxjs/toolkit'
import { pokemonApi } from '../../api/pokemonApi';

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    page: 0,
    list: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons : (state) => {
        state.isLoading = true;
    },
    setPokemons : (state, action) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.list = action.payload.list;
    }
  },
})


// thunks: procedimientos asíncronos en Redux

export const getPokemons = ( page = 0) => {
  return async (dispatch, getState) => {
      dispatch(startLoadingPokemons());

      const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`);

      dispatch(setPokemons({
          list: data.results,
          page: page + 1,
      }));
  }
}

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;