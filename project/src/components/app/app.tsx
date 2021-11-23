import {AppRoute, AuthorizationStatus} from '../../consts';
import {Route, Router, Switch} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import Loader from '../loader/loader';
import ErrorNotFound from '../error-not-found/error-not-found';
import PrivateRoute from '../private-route/private-route';
import {useSelector} from 'react-redux';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/selectors/selectors';

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader/>;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root} component={Main}/>
        <Route exact path={AppRoute.Offer} render={(props) => (<Offer {...props}/>)}/>
        <PrivateRoute exact path={AppRoute.Favorites} component={() => <Favorites/>} redirectTo={AppRoute.Login} renderAllowed={isAuthenticated}/>
        <PrivateRoute exact path={AppRoute.Login} component={() => <Login/>} redirectTo={AppRoute.Root} renderAllowed={!isAuthenticated}/>
        <Route component={ErrorNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
