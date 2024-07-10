import { FC, PropsWithChildren } from 'react';

import { IComment } from '../../interfaces/commentsInterface.ts';
import { CommentContainer } from './CommentContainer.tsx';
import css from './comments.module.css';

interface IProps extends PropsWithChildren {
  comments: IComment[];
}

const CommentsContainer: FC<IProps> = ({ comments }) => {
  return (
    <div className={css.wrapper}>
      {comments.map((item) => (
        <CommentContainer item={item} key={item.id} />
      ))}
    </div>
  );
};

export { CommentsContainer };
