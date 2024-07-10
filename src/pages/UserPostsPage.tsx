import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostsContainer } from '../components/PostsContainer/PostsContainer.tsx';
import { IPost } from '../interfaces/postsInterfsce.ts';
import { postService } from '../services/postService.ts';

const UserPostsPage = () => {
  const { userId } = useParams<string>();
  const [userPosts, setUserPosts] = useState<IPost[]>([]);

  useEffect(() => {
    postService.getPostsOfCurrentUser(userId).then((data) => setUserPosts(data.data));
  }, []);

  return <div>{userPosts && <PostsContainer posts={userPosts} />}</div>;
};

export { UserPostsPage };
