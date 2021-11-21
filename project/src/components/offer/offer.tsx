import Header from '../header/header';
import {PointsType} from '../../types/offer-info';
import CardList from '../card-list/card-list';
import React, {useEffect, useState} from 'react';
import ErrorNotFound from '../error-not-found/error-not-found';
import Map from '../map/map';
import {RootState} from '../../store/reducer/root-reducer';
import {connect, ConnectedProps} from 'react-redux';
import {getRating} from '../../utils';
import {ThunkAppDispatch} from '../../types/action';
import Loader from '../loader/loader';
import {
  fetchCommentsAction,
  fetchNearOffersAction,
  fetchOfferByIdAction,
  fetchSetFavoriteAction
} from '../../store/actions/api-actions';
import Reviews from '../reviews/reviews';

type OfferProps = {
  offerId: string
}

const mapStateToProps = ({DATA: {offer, reviews, nearOffers}, USER: {authorizationStatus}}: RootState) => ({
  offer,
  reviews,
  nearOffers,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSetFavorite: (id: number, status: boolean) => {
    dispatch(fetchSetFavoriteAction(id, status));
  },
  onLoad: (id: string) => Promise.all([
    dispatch(fetchOfferByIdAction(id)),
    dispatch(fetchCommentsAction(id)),
    dispatch(fetchNearOffersAction(id)),
  ]),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & OfferProps;

function Offer({offer, nearOffers, offerId, onSetFavorite, onLoad}: ConnectedComponentProps): JSX.Element {
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    onLoad(offerId).then(() => setDataLoaded(true));
  }, [offerId, onLoad]);

  if (!isDataLoaded) {
    return <Loader/>;
  }

  if (!offer) {
    return <ErrorNotFound/>;
  }

  const mapPoints = nearOffers.map(({location, id}) => ({location, id})) as PointsType;
  mapPoints.push({location: offer.location, id: offer.id});

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt=""/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button
                  className={`property__bookmark-button ${offer.isFavorite && 'property__bookmark-button--active'} button`}
                  type="button" onClick={() => onSetFavorite(offer.id, !offer.isFavorite)}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'In' : 'To'} bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRating(offer.rating)}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro &&
                  <span className="property__user-status">
                      Pro
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>

              <Reviews/>

            </div>
          </div>
          <section className="property__map map">
            <Map points={mapPoints} hoveredOfferId={offer.id}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardList offers={nearOffers} blockClass="near-places__card" elementClass="near-places__image-wrapper"/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {Offer};
export default connector(Offer);
