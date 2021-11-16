import {AppRoute, AuthorizationStatus} from '../../consts';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorNotFound from '../error-not-found/error-not-found';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {isCheckedAuth} from '../../utils';


const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

function App({authorizationStatus, isDataLoaded}: ConnectedProps<typeof connector>): JSX.Element {
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  if (!isCheckedAuth || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Login} render={() => (isAuthenticated ? <Redirect to='/'/> : <Login/>)} />
        <Route exact path={AppRoute.Offer} render={(props) =>(<Offer offerId={props.match.params.id} />)} />
        <Route exact path={AppRoute.Main} component={Main} />
        <Route exact path={AppRoute.Favorites} render={() => (isAuthenticated ? <Favorites/> : <Redirect to={AppRoute.Login}/>)} />
        <Route component={ErrorNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
