import {CityType, OffersType} from '../../types/offer-info';
import Card from '../card/card';

type CardListProp = {
  onCardListItemHover?: (city?: CityType) => void, // необязательный аргумент, т.к. CardList есть внутри Offer, он отображает места поблизости и там при неведении не нужно подсвечивать карту
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
          {...(onCardListItemHover && {
            onMouseEnter: () => onCardListItemHover(offer.city),
            onMouseLeave: () => onCardListItemHover(),
          })}
        />
      ))}
    </>
  );
}

export default CardList;
