import { urls } from '../constants/urls.ts';
import { IRes } from '../types/IRes.ts';
import { IPost } from '../types/postInterface.ts';
import { axiosService } from './axiosService.ts';

const postsService = {
  createPost: (data: IPost): IRes<IPost> => axiosService.post(urls.posts, data),
};

export { postsService };
