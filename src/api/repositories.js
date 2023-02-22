import HTTP from './config';
import { API, LIMIT } from '../constants';

export const fetchRepositoriesByQuery = ({ query, page }) => {
	return HTTP.get(`${API.SEARCH_REPO}?q=${query}&page=${page}&per_page=${LIMIT}`);
};
