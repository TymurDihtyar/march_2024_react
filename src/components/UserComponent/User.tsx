import { FC, PropsWithChildren } from 'react';

import { IUser } from '../../interfaces/userInterface.ts';

interface IProps extends PropsWithChildren {
  item: IUser;
  getPostsOfUser: (id: string) => void;
}

const User: FC<IProps> = ({ item, getPostsOfUser }) => {
  const { id, firstName, lastName, email } = item;
  return (
    <div>
      <p>{id}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <button onClick={() => getPostsOfUser(id.toString())}>get posts</button>
    </div>
  );
};

export { User };
