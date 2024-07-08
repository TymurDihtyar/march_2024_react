import { IRes } from '../types/IRes.ts';
import { axiosService } from './axiosService.ts';

const postsService = {
  createPost: (data): IRes<any> => axiosService.post(urls.posts, data),
};

export { postsService };
