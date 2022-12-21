import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
    keyword: '',
    search: false,
  },
  reducers: {
    getUsers: (state, action) => {
      state.value = action.payload;
    },

    getKeyword: (state, action) => {
      state.keyword = action.payload;
    },

    toggleSearch: state => {
      state.search = !state.search;
    },
  },
});

export const {getUsers, getKeyword, toggleSearch} = userSlice.actions;

export default userSlice.reducer;
