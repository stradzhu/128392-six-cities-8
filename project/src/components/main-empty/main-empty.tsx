import Header from '../header/header';
import CityList from '../city-list/city-list';

type MainEmptyProps = {
  activeCity: string,
  onClickCity: (city: string) => void,
}

function MainEmpty({activeCity, onClickCity}: MainEmptyProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
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
                <p className="cities__status-description">We could not find any property available at the moment
                  in {activeCity}
                </p>
              </div>
            </section>
            <div className="cities__right-section"/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEmpty;