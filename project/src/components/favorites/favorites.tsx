import {Link} from 'react-router-dom';
import FavoritesPlaceCard from '../favorites-place-card/favorites-place-card';
import Header from '../header/header';

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="/">
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritesPlaceCard />
                  <FavoritesPlaceCard />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="/">
                      <span>Cologne</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritesPlaceCard />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
