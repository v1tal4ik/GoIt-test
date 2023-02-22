import axios from 'axios';
import { API } from '../constants';

const HTTP = axios.create({
	baseURL: API.BASE,
});

export default HTTP;
