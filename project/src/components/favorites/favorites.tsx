import {Link} from 'react-router-dom';
import Header from '../header/header';
import {RootState} from '../../store/reducer/root-reducer';
import {connect, ConnectedProps} from 'react-redux';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {ThunkAppDispatch} from '../../types/action';
import {getRating} from '../../utils';
import {fetchFavoritesAction, fetchSetFavoriteAction} from '../../store/actions/api-actions';
import Loader from '../loader/loader';
import React, {useEffect, useState} from 'react';
import {AppRoute} from '../../consts';

const mapStateToProps = ({DATA: {favorites}}: RootState) => ({
  favorites,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSetFavorite: (id: number, status: boolean) => {
    dispatch(fetchSetFavoriteAction(id, status)).then(() => dispatch(fetchFavoritesAction()));
  },
  onLoad: () => dispatch(fetchFavoritesAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function Favorites({favorites, onSetFavorite, onLoad}: ConnectedProps<typeof connector>): JSX.Element {
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    onLoad().then(() => setDataLoaded(true));
  }, [onLoad]);

  if (!isDataLoaded) {
    return <Loader/>;
  }

  if (!favorites.length) {
    return <FavoritesEmpty/>;
  }

  const citiesList = Array.from(new Set(favorites.map(({city}) => city.name))).sort();

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesList.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="#">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favorites.filter(({city: {name}}) => name === city).map((offer) => (
                      <article key={offer.id} className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={`/offer/${offer.id}`}>
                            <img className="place-card__image" src={offer.previewImage} width="150" height="110"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{offer.price}</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <button onClick={() => onSetFavorite(offer.id, !offer.isFavorite)}
                              className="place-card__bookmark-button place-card__bookmark-button--active button" type="button"
                            >
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"/>
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{width: getRating(offer.rating)}}/>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
                          </h2>
                          <p className="place-card__type">{offer.type}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export {Favorites};
export default connector(Favorites);
