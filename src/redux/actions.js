import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRepositoriesByQuery } from '../api/repositories';

export const fetchRepositories = createAsyncThunk(
	'repositories/fetch',
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchRepositoriesByQuery(data);

			if (response.status === 200) {
				const filltredArr = response.data.items.map((item) => {
					const {
						description,
						full_name,
						language,
						stargazers_count,
						watchers,
						owner: { avatar_url, login },
					} = item;
					return {
						avatar_url,
						description,
						full_name,
						language,
						login,
						stargazers_count,
						watchers,
					};
				});
				return { total_count: response.data.total_count, items: filltredArr };
			} else {
				throw new Error('Server error');
			}
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
