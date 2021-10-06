import Main from '../main/main';
// import Favorites from '../favorites/favorites';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
// import Login from '../login/login';
// import MainEmpty from '../main-empty/main-empty';
// import Property from '../property/property';
// import PropertyNotLogged from '../property-not-logged/property-not-logged';

type AppProps = {
  countRentalOffers: number
}

function App({countRentalOffers}: AppProps): JSX.Element {
  return (
    <Main countRentalOffers={countRentalOffers} />
    // <Favorites />
    // <FavoritesEmpty />
    // <Login />
    // <MainEmpty />
    // <Property />
    // <PropertyNotLogged />
  );
}

export default App;
