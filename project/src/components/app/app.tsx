import {AppRoute, AuthorizationStatus} from '../../consts';
import {Route, Router, Switch} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import Loader from '../loader/loader';
import ErrorNotFound from '../error-not-found/error-not-found';
import PrivateRoute from '../private-route/private-route';
import {RootState} from '../../store/reducer/root-reducer';
import {connect, ConnectedProps} from 'react-redux';
import {isCheckedAuth} from '../../utils';
import browserHistory from '../../browser-history';

const mapStateToProps = ({USER: {authorizationStatus}}: RootState) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

function App({authorizationStatus}: ConnectedProps<typeof connector>): JSX.Element {
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  if (!isCheckedAuth) {
    return <Loader/>;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root} component={Main}/>
        <Route exact path={AppRoute.Offer} render={(props) => (<Offer offerId={props.match.params.id}/>)}/>
        <PrivateRoute exact path={AppRoute.Favorites} component={() => <Favorites/>} redirectTo={AppRoute.Login}
          renderAllowed={isAuthenticated}
        />
        <PrivateRoute exact path={AppRoute.Login} component={() => <Login/>} redirectTo={AppRoute.Root}
          renderAllowed={!isAuthenticated}
        />
        <Route component={ErrorNotFound}/>
      </Switch>
    </Router>
  );
}

export {App};
export default connector(App);
