import { FC, PropsWithChildren } from 'react';

import { IUser } from '../../interfaces/userInterface.ts';
import css from './User.module.css';

interface IProps extends PropsWithChildren {
  item: IUser;
  getPostsOfUser: (id: string) => void;
}

const User: FC<IProps> = ({ item, getPostsOfUser }) => {
  const { id, firstName, lastName, email } = item;
  return (
    <div className={css.container}>
      <p>User id: {id}</p>
      <p>Name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Email: {email}</p>
      <button onClick={() => getPostsOfUser(id.toString())}>get posts</button>
    </div>
  );
};

export { User };
