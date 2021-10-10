import {AppRoute, AuthorizationStatus} from '../../const';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Login from '../login/login';
import MainEmpty from '../main-empty/main-empty';
import Property from '../property/property';
import ErrorNotFound from '../error-not-found/error-not-found';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  countRentalOffers: number
}

function App({countRentalOffers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main countRentalOffers={countRentalOffers} />
        </Route>

        <Route exact path={AppRoute.Login} component={Login} />

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />

        <Route exact path={AppRoute.Property}>
          <Property authorizationStatus={AuthorizationStatus.NoAuth} />
        </Route>

        <Route exact path={AppRoute.FavoritesEmpty} component={FavoritesEmpty} />
        <Route exact path={AppRoute.MainEmpty} component={MainEmpty} />

        <Route component={ErrorNotFound} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
