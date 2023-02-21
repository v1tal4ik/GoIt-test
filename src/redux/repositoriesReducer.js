import { createSlice } from '@reduxjs/toolkit';
import { fetchRepositories } from './actions';

const initialState = {
	total_count: undefined,
	items: undefined,
};

export const repositoriesSlice = createSlice({
	name: 'repositories',
	initialState,
	extraReducers: {
		[fetchRepositories.fulfilled]: (state, action) => {
			state.total_count = action.payload.total_count;
			state.items = action.payload.items;
		},
		[fetchRepositories.rejected]: (state, action) => {
			state.total_count = 0;
			state.items = [];
		},
	},
});

export default repositoriesSlice.reducer;
