import { FC, PropsWithChildren } from 'react';

import { IPost } from '../../interfaces/postsInterfsce.ts';
import css from './posts.module.css';
import { PostContainer } from './PostContainer.tsx';

interface IProps extends PropsWithChildren {
  posts: IPost[];
}

const PostsContainer: FC<IProps> = ({ posts }) => {
  return (
    <div className={css.wrapper}>
      {posts.map((item) => (
        <PostContainer item={item} key={item.id} />
      ))}
    </div>
  );
};

export { PostsContainer };
