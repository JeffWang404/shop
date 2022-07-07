import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              <div>Sign In</div>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
