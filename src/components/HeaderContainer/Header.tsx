import { Link } from 'react-router-dom';

import css from './header.module.css';

const Header = () => {
  return (
    <nav className={css.navBar}>
      <Link className={css.link} to={'/users'}>
        Users
      </Link>
      <Link className={css.link} to={'/posts'}>
        Posts
      </Link>
      <Link className={css.link} to={'/comments'}>
        Comments
      </Link>
    </nav>
  );
};

export { Header };
