import {AuthorizationStatus, RatingStar} from '../../consts';
import Header from '../header/header';
import {OffersType} from '../../types/offerInfo';
import {Reviews} from '../../types/reviews';
import CardList from '../card-list/card-list';
import React, {useState} from 'react';
import ErrorNotFound from '../error-not-found/error-not-found';

type OfferProps = {
  authorizationStatus: AuthorizationStatus,
  offers: OffersType,
  reviews: Reviews,
  match: any // кажется, это мне нужно. Но я вообще не вьехал, что, откуда и куда https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props
}

function ReviewsForm(): JSX.Element {
  const [review, setReview] = useState(''); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [rating, setRating] = useState(0); // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingStar.map(({mark, title})=>(
          <React.Fragment key={mark}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              value={mark}
              id={`${mark}-stars`}
              type="radio"
              data-rating={mark}
              onClick={(event)=>{
                const input = event.target as HTMLInputElement;
                setRating(Number(input.value));
              }}
            />
            <label htmlFor={`${mark}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange = {
          (event) => {
            setReview(event.target.value);
          }
        }
      />
      <div className="reviews__button-wrapper">props.match params.id
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

function Offer({authorizationStatus, offers, reviews, match}: OfferProps): JSX.Element {
  const offer = offers.find((item) => String(item.id) === match.params.id);

  if (!offer) {
    return <ErrorNotFound />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map(({id, path})=>(
                <div className="property__image-wrapper" key={id}>
                  <img className="property__image" src={path} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating * 100 / 5  }%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroomsCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.inside.map(({id, title})=>(
                    <li className="property__inside-item" key={id}>
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>
                <div className="property__description" dangerouslySetInnerHTML={{__html: offer.host.description}} />
              </div>
              <section className="property__reviews reviews">
                {reviews.length > 0 &&
                  <>
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                    <ul className="reviews__list">
                      {reviews.map((review)=>(
                        <li key={review.id} className="reviews__item">
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
                                <span style={{width: `${review.rating * 100 / 5  }%`}} />
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
                      ))}
                    </ul>
                  </>}

                {authorizationStatus === AuthorizationStatus.Auth && ReviewsForm()}

              </section>
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardList offers={offers.slice(0, 3)} blockClass="near-places__card" elementClass="near-places__image-wrapper" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
