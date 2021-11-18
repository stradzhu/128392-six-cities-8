import {Redirect, Route} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute} from '../../consts';
import React from 'react';

type PrivateRouteProps = RouteProps & {
  component: () => JSX.Element,
  renderAllowed: boolean,
  redirectTo: AppRoute
}

function PrivateRoute({component, renderAllowed, redirectTo, ...rest}: PrivateRouteProps): JSX.Element {
  return (
    <Route {...rest} render={() => renderAllowed ? component() : <Redirect to={redirectTo}/>}/>
  );
}

export default PrivateRoute;
