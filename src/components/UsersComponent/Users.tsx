import { FC, useEffect, useState } from 'react';

import { IPost } from '../../interfaces/postInterface.ts';
import { IUser } from '../../interfaces/userInterface.ts';
import { userService } from '../../services/userService.ts';
import { UserPost } from '../PostContainer/UserPost.tsx';
import { User } from '../UserComponent/User.tsx';
import css from './Users.module.css';

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
    <div className={css.container}>
      <div className={css.users}>
        {users.map((item) => (
          <User key={item.id} item={item} getPostsOfUser={getPostsOfUser} />
        ))}
      </div>
      <div className={css.posts}>
        {posts.length ?
          posts.map((item) => <UserPost key={item.id} item={item} />)
          : <div>User have no posts</div>}
      </div>
    </div>
  );
};

export { Users };
