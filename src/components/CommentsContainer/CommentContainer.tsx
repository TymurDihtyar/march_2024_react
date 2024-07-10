import { FC, PropsWithChildren } from 'react';

import { IComment } from '../../interfaces/commentsInterface.ts';
import css from './comment.module.css';

interface IProps extends PropsWithChildren {
  item: IComment;
}

const CommentContainer: FC<IProps> = ({ item }) => {
  const { postId, id, name, email, body } = item;

  return (
    <div className={css.wrapper}>
      <h3>name: {name}</h3>
      <p>body: {body}</p>
      <p>email: {email}</p>
      <p>postId: {postId}</p>
      <p>id: {id}</p>
    </div>
  );
};

export { CommentContainer };
