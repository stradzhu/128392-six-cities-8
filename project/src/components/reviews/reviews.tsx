import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import React from 'react';
import {getActualReviews} from '../../utils';
import {connect, ConnectedProps} from 'react-redux';
import {AuthorizationStatus} from '../../consts';
import {getAuthorizationStatus, getReviews} from '../../store/selectors/selectors';
import {State} from '../../types/state';

const mapStateToProps = (state: State) => ({
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const connector = connect(mapStateToProps);

function Reviews({reviews, authorizationStatus}: ConnectedProps<typeof connector>): JSX.Element {
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;
  const actualReviews = getActualReviews(reviews);

  return (
    <section className="property__reviews reviews">
      {reviews.length > 0 && <ReviewsList reviews={actualReviews}/>}
      {isAuthenticated && <ReviewsForm/>}
    </section>
  );
}

export {Reviews};
export default connector(Reviews);
