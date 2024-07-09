import { urls } from '../constants/urls.ts';
import { IComment } from '../interfaces/commentsInterface.ts';
import { IRes } from '../types/IRes.ts';
import { axiosService } from './axiosService.ts';

const commentsService = {
  getAllComments: (): IRes<IComment[]> => axiosService.get(urls.comments),
  getCommentsOfCurrentPost: (id: number): IRes<IComment> => axiosService.get(`${urls.posts}/${id}/comments`),
};

export { commentsService };
