import * as React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {roots} from '../../constants';

const AuthenticatedRoute = props => {
  const {root} = props;

  if (root === roots.INSIDE) {
    return <Outlet />;
  }

  return <Navigate to={'/'} />;
};

export default AuthenticatedRoute;
