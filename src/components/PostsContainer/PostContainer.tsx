import { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPost } from '../../interfaces/postsInterfsce.ts';
import css from './post.module.css';

interface IProps extends PropsWithChildren {
  item: IPost;
}

const PostContainer: FC<IProps> = ({ item }) => {
  const { userId, id, title, body } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${item.id}/comments`);
  };

  return (
    <div className={css.wrapper} onClick={handleClick}>
      <h3>title: {title}</h3>
      <p>body: {body}</p>
      <p>userId: {userId}</p>
      <p>id: {id}</p>
    </div>
  );
};

export { PostContainer };
