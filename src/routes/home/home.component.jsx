import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

import Categories from '../../assets/categories.json';

const Home = () => {
  return (
    <div>
      <Directory categories={Categories} />;
      <Outlet />;
    </div>
  );
};

export default Home;
