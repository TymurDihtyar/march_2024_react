import { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { IUser } from '../../interfaces/usersInterface.ts';
import css from './user.module.css';
interface IProps extends PropsWithChildren {
  item: IUser;
}

const UserContainer: FC<IProps> = ({ item }) => {
  const { name, email, phone, username } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${item.id}/posts`);
  };

  return (
    <div className={css.wrapper} onClick={handleClick}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{username}</p>
    </div>
  );
};

export { UserContainer };
