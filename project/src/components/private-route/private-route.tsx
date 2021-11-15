import {Route} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element,
  renderProhibited: () => JSX.Element
  allowedRender: boolean
}

function PrivateRoute({exact, path, render, allowedRender, renderProhibited}: PrivateRouteProps): JSX.Element {
  return <Route exact={exact} path={path} render={() => allowedRender ? render() : renderProhibited()} />;
}

export default PrivateRoute;
