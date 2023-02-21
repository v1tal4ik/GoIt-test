import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './repositoriesReducer';

const store = configureStore({
	reducer: {
		repositories: repositoriesReducer,
	},
});

export default store;
