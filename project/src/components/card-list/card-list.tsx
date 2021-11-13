import {CityType, OffersType} from '../../types/offer-info';
import Card from '../card/card';

type CardListProp = {
  onCardListItemHover: (city?: CityType) => void,
  offers: OffersType,
  blockClass: string,
  elementClass: string
}

function CardList({onCardListItemHover, offers, blockClass, elementClass}: CardListProp): JSX.Element {
  return (
    <>
      {offers.map((offer)=>(
        <Card key={offer.id}
          offer={offer}
          blockClass={blockClass}
          elementClass={elementClass}
          onCardListItemHover={onCardListItemHover}
        />
      ))}
    </>
  );
}

export default CardList;
