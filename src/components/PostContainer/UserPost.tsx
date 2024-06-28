import { FC, PropsWithChildren } from 'react';

import { IPost } from '../../interfaces/postInterface.ts';

interface IProps extends PropsWithChildren {
  item: IPost;
}

const UserPost: FC<IProps> = ({ item }) => {
  const { id, title, body } = item;
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export { UserPost };
