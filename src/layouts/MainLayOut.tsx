import { Outlet } from 'react-router-dom';

import { Header } from '../components/HeaderContainer/Header.tsx';

const MainLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export { MainLayOut };
