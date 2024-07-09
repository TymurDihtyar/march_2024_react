import { useEffect, useState } from 'react';

import { UsersContainer } from '../components/UsersContainer/UsersContainer.tsx';
import { IUser } from '../interfaces/usersInterface.ts';
import { userService } from '../services/userService.ts';

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    userService.getAllUsers().then((data) => setUsers(data.data));
  }, []);

  return <div>{users && <UsersContainer users={users} />}</div>;
};

export { UsersPage };
