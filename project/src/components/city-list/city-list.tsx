import {Link} from 'react-router-dom';
import {ALL_CITY_LIST} from '../../consts';

type CityListProps = {
  activeCity: string,
  onClickCity: (city: string) => void,
}

function CityList({activeCity, onClickCity}: CityListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {ALL_CITY_LIST.map((city) => (
          <li key={city} className="locations__item">
            <Link onClick={() => {city !== activeCity && onClickCity(city);}}
              className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
              to="/"
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
