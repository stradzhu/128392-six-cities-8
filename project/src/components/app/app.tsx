import {AppRoute, AuthorizationStatus} from '../../consts';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import ErrorNotFound from '../error-not-found/error-not-found';
import PrivateRoute from '../private-route/private-route';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

function App({authorizationStatus}: ConnectedProps<typeof connector>): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact allowedRender={authorizationStatus !== AuthorizationStatus.Auth} path={AppRoute.Login} render={() => <Login/>} renderProhibited={() => <Redirect to='/'/>} />
        <Route exact path={AppRoute.Offer} render={(props) =>(<Offer {...props} />)} />
        <Route exact path={AppRoute.Main} component={Main} />
        <PrivateRoute exact allowedRender={authorizationStatus === AuthorizationStatus.Auth} path={AppRoute.Favorites} render={() => <Favorites/>} renderProhibited={() => <Redirect to={AppRoute.Login}/>} />
        <Route component={ErrorNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
