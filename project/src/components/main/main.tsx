import Header from '../header/header';
import CityList from '../city-list/city-list';
import CardList from '../card-list/card-list';
import Map from '../map/map';
import {CityType, OffersType} from '../../types/offer-info';
import {useState} from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import {changeCity} from '../../store/action';

type MainProps = {
  offers: OffersType
}

const mapStateToProps = ({activeCity}: State) => ({
  activeCity,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onClickCity: (activeCity: string) => {
    dispatch(changeCity(activeCity));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainProps;

function Main({offers, onClickCity, activeCity}: ConnectedComponentProps): JSX.Element {

  const [selectedCity, setSelectedCity] = useState<CityType | undefined>(undefined);

  const onCardListItemHover = (city?: CityType) => {
    setSelectedCity(city);
  };

  const filteredOffers = offers.filter(({city: {title}}) => title === activeCity);

  if (filteredOffers.length === 0) {
    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CityList onClickCity={onClickCity} activeCity={activeCity}/>
          </div>
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
                </div>
              </section>
              <div className="cities__right-section" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList onClickCity={onClickCity} activeCity={activeCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardList onCardListItemHover={onCardListItemHover} offers={filteredOffers} blockClass="cities__place-card" elementClass="cities__image-wrapper"/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={filteredOffers.map(({city}) => city)} selectedCity={selectedCity} />
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
