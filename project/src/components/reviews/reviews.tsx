import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import React from 'react';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../consts';
import {getAuthorizationStatus, getReviews} from '../../store/selectors/selectors';

function Reviews(): JSX.Element {
  const reviews = useSelector(getReviews);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <section className="property__reviews reviews">
      {reviews.length > 0 && <ReviewsList reviews={reviews}/>}
      {isAuthenticated && <ReviewsForm/>}
    </section>
  );
}

export default Reviews;
