import axios from 'axios';

import { baseURL } from '../constants/urls.ts';

const axiosService = axios.create({ baseURL });

export { axiosService };
