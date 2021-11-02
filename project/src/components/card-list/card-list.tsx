import React, {useState} from 'react';
import {OffersType} from '../../types/offerInfo';
import Card from '../card/card';

type CardListProp = {
  offers: OffersType,
  blockClass: string,
  elementClass: string
}

function CardList({offers, blockClass, elementClass}: CardListProp): JSX.Element {
  const [activeCard, setActiveCard] = useState(0); // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <>
      {offers.map((offer)=>(
        <Card key={offer.id}
          offer={offer}
          blockClass={blockClass}
          elementClass={elementClass}
          onMouseEnter = {() => setActiveCard(offer.id)}
          onMouseLeave = {() => setActiveCard(0)}
        />
      ))}
    </>
  );
}

export default CardList;
