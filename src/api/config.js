import axios from 'axios';
import { API } from '../constants';

const HTTP = axios.create({
	baseURL: API.BASE,
});

HTTP.interceptors.request.use(
	async (config) => {
		const { headers } = config;

		return {
			...config,
			headers: {
				...headers,
				Accept: 'application/vnd.github+json',
				Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
			},
		};
	},
	(error) => Promise.reject(error)
);

export default HTTP;
