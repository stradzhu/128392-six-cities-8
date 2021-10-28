import {Link} from 'react-router-dom';

type LocationsItemProps = {
  city: string
}

function LocationsItem({city}: LocationsItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="/">
        <span>{city}</span>
      </Link>
    </li>
  );
}

function Locations(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <LocationsItem city="Paris" />
        <LocationsItem city="Cologne" />
        <LocationsItem city="Brussels" />
        <LocationsItem city="Amsterdam" />
        <LocationsItem city="Hamburg" />
        <LocationsItem city="Dusseldorf" />
      </ul>
    </section>
  );
}

export default Locations;
