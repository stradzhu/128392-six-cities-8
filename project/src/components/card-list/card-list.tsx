import {OffersType} from '../../types/offer-info';
import Card from '../card/card';

type CardListProp = {
  onCardListItemHover?: (id?: number) => void,
  offers: OffersType,
  blockClass: string,
  elementClass: string
}

function CardList({onCardListItemHover, offers, blockClass, elementClass}: CardListProp): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <Card key={offer.id}
          offer={offer}
          blockClass={blockClass}
          elementClass={elementClass}
          {...(onCardListItemHover && {
            onMouseEnter: () => onCardListItemHover(offer.id),
            onMouseLeave: () => onCardListItemHover(),
          })}
        />
      ))}
    </>
  );
}

export default CardList;
