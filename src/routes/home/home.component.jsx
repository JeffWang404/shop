import Directory from '../../components/directory/directory.component';

import Categories from '../../assets/categories.json';

const Home = () => {
  return <Directory categories={Categories} />;
};

export default Home;
