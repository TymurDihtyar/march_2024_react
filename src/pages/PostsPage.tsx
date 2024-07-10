import { useEffect, useState } from 'react';

import { PostsContainer } from '../components/PostsContainer/PostsContainer.tsx';
import { IPost } from '../interfaces/postsInterfsce.ts';
import { postService } from '../services/postService.ts';

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    postService.getAllPosts().then((data) => setPosts(data.data));
  }, []);

  return <div>{posts && <PostsContainer posts={posts} />}</div>;
};

export { PostsPage };
