import { FC, PropsWithChildren } from 'react';

import { IPost } from '../../interfaces/postInterface.ts';
import css from './UserPost.module.css';

interface IProps extends PropsWithChildren {
  item: IPost;
}

const UserPost: FC<IProps> = ({ item }) => {
  const { id, title, body } = item;
  return (
    <div className={css.container}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export { UserPost };
