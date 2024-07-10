import { useEffect, useState } from 'react';

import { CommentsContainer } from '../components/CommentsContainer/CommentsContainer.tsx';
import { IComment } from '../interfaces/commentsInterface.ts';
import { commentsService } from '../services/commentsService.ts';

const CommentsPage = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    commentsService.getAllComments().then((data) => setComments(data.data));
  }, []);

  return <div>{comments && <CommentsContainer comments={comments} />}</div>;
};

export { CommentsPage };
