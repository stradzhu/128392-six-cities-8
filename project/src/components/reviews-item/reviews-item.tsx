import React from 'react';
import {Review} from '../../types/reviews';
import {getRating} from '../../utils';

type ReviewsItemProp = {
  review: Review
}

function ReviewsItem({review}: ReviewsItemProp): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt={review.name} />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRating(review.rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={new Date(review.date).toLocaleString('en-US')}>
          {new Date(review.date).toLocaleString('en-US', {year: 'numeric', month: 'long'})}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
