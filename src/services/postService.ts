import { urls } from '../constants/urls.ts';
import { IPost } from '../interfaces/postsInterfsce.ts';
import { IRes } from '../types/IRes.ts';
import { axiosService } from './axiosService.ts';

const postService = {
  getAllPosts: (): IRes<IPost[]> => axiosService.get(urls.posts),
  getPostsOfCurrentUser: (id: string): IRes<IPost[]> => axiosService.get(`${urls.users}/${id}/posts`),
};

export { postService };
