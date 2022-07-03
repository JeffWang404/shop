import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-link" to="/">
          <div>Home</div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <div>Shop</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
