import { urls } from '../constants/urls.ts';
import { IUser } from '../interfaces/usersInterface.ts';
import { IRes } from '../types/IRes.ts';
import { axiosService } from './axiosService.ts';

const userService = {
  getAllUsers: (): IRes<IUser[]> => axiosService.get(urls.users),
  getOneUser: (id: number): IRes<IUser> => axiosService.get(`${urls.users}/${id}`),
};

export { userService };
