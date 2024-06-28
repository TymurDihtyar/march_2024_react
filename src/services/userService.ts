import { IRes } from '../types/IRes.ts';
import { urls } from '../constants/urls.ts';
import { IPosts } from '../interfaces/postInterface.ts';
import { IUsers } from '../interfaces/userInterface.ts';
import { axiosService } from './axiosService.ts';

const userService = {
  getAllUsers: (): IRes<IUsers> => axiosService.get(urls.users),
  getUserPostsById: (id: string): IRes<IPosts> => axiosService.get(urls.posts(id)),
};

export { userService };
