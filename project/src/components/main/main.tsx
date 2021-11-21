import Header from '../header/header';
import CityList from '../city-list/city-list';
import CardList from '../card-list/card-list';
import Map from '../map/map';
import {PointsType} from '../../types/offer-info';
import React, {useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import {changeCity} from '../../store/actions/action';
import PlaceSorting from '../places-sorting/place-sorting';
import {getSortedOffers} from '../../utils';
import {fetchOffersAction} from '../../store/actions/api-actions';
import Loader from '../loader/loader';
import MainEmpty from '../main-empty/main-empty';
import {getActiveCity, getCurrentSortType, getOffers} from '../../store/selectors/selectors';
import {State} from '../../types/state';

const mapStateToProps = (state: State) => ({
  activeCity: getActiveCity(state),
  offers: getOffers(state),
  currentSortType: getCurrentSortType(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickCity: (activeCity: string) => {
    dispatch(changeCity(activeCity));
  },
  onLoad: () => dispatch(fetchOffersAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function Main({
  activeCity,
  offers,
  currentSortType,
  onClickCity,
  onLoad,
}: ConnectedProps<typeof connector>): JSX.Element {
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [hoveredOfferId, setHoveredOfferId] = useState<number | undefined>(undefined);

  useEffect(() => {
    onLoad().then(() => setDataLoaded(true));
  }, [onLoad]);

  if (!isDataLoaded) {
    return <Loader/>;
  }

  const filteredOffers = offers.filter(({city: {name}}) => name === activeCity);
  const sortedOffers = getSortedOffers(filteredOffers, currentSortType);

  if (!sortedOffers.length) {
    return <MainEmpty activeCity={activeCity} onClickCity={onClickCity}/>;
  }

  const onCardListItemHover = (id?: number) => {
    setHoveredOfferId(id);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList onClickCity={onClickCity} activeCity={activeCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
              <PlaceSorting/>
              <div className="cities__places-list places__list tabs__content">
                <CardList onCardListItemHover={onCardListItemHover} offers={sortedOffers}
                  blockClass="cities__place-card" elementClass="cities__image-wrapper"
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={sortedOffers.map(({location, id}) => ({location, id})) as PointsType}
                  hoveredOfferId={hoveredOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {Main};
export default connector(Main);
