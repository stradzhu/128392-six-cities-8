import React from 'react';
import {Reviews} from '../../types/reviews';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProp = {
  reviews: Reviews
}

function ReviewsList({reviews}: ReviewsListProp): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem key={review.id} review={review}/>
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
