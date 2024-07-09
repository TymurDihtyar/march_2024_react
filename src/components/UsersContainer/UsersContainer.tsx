import { FC, PropsWithChildren } from 'react';

import { IUser } from '../../interfaces/usersInterface.ts';
import { UserContainer } from './UserContainer.tsx';
import css from './users.module.css';

interface IProps extends PropsWithChildren {
  users: IUser[];
}

const UsersContainer: FC<IProps> = ({ users }) => {
  return (
    <div className={css.wrapper}>
      {users.map((item) => (
        <UserContainer item={item} key={item.id} />
      ))}
    </div>
  );
};

export { UsersContainer };
