import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CommentsContainer } from '../components/CommentsContainer/CommentsContainer.tsx';
import { IComment } from '../interfaces/commentsInterface.ts';
import { commentsService } from '../services/commentsService.ts';

const PostCommentsPage = () => {
  const { postId } = useParams<string>();
  const [postComments, setPostComments] = useState<IComment[]>([]);

  useEffect(() => {
    commentsService.getCommentsOfCurrentPost(postId).then((data) => setPostComments(data.data));
  }, []);

  return <div>{postComments && <CommentsContainer comments={postComments} />}</div>;
};

export { PostCommentsPage };
