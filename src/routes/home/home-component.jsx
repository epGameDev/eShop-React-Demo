import { Outlet } from "react-router-dom";

import CategoryCollection from "../../components/category-collection/category-collection-component";

const Home = () => {

  return (
    <main className="main__container">
      <CategoryCollection />
      <Outlet/>
    </main>
  );
};

export default Home;