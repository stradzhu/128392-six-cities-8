import React, {useState} from 'react';
import {OffersType} from '../../types/offerInfo';
import Card from '../card/card';

type CardListProp = {
  offers: OffersType,
  blockClass: string,
  elementClass: string
}

function CardList({offers, blockClass, elementClass}: CardListProp): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      <div style={{position: 'relative', zIndex: 2, color: 'white', pointerEvents: 'none'}}>
        <h1 style={{position: 'absolute', left: 10, whiteSpace: 'nowrap'}}>Для теста: activeCard = {activeCard}</h1>
      </div>

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
