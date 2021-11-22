import {Reviews} from '../../types/reviews';
import {getRating} from '../../utils';

type ReviewsListProp = {
  reviews: Reviews
}

function ReviewsList({reviews}: ReviewsListProp): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li key={review.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54"
                  alt={review.user.name}
                />
              </div>
              <span className="reviews__user-name">
                {review.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: getRating(review.rating)}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <time className="reviews__time" dateTime={new Date(review.date).toLocaleString('en-US')}>
                {new Date(review.date).toLocaleString('en-US', {year: 'numeric', month: 'long'})}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
