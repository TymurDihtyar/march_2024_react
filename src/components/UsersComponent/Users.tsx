import { FC, useEffect, useState } from 'react';

import { IPost } from '../../interfaces/postInterface.ts';
import { IUser } from '../../interfaces/userInterface.ts';
import { userService } from '../../services/userService.ts';
import { UserPost } from '../PostContainer/UserPost.tsx';
import { User } from '../UserComponent/User.tsx';

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    userService.getAllUsers().then((res) => setUsers(res.data.users));
  }, []);

  const getPostsOfUser = (id: string) => {
    userService.getUserPostsById(id).then((res) => setPosts(res.data.posts));
  };

  return (
    <>
      {users.map((item) => (
        <User key={item.id} item={item} getPostsOfUser={getPostsOfUser} />
      ))}
      {posts.map((item) => (
        <UserPost key={item.id} item={item} />
      ))}
    </>
  );
};

export { Users };
