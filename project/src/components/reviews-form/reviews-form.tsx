import {toast} from 'react-toastify';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {RatingStar, ReviewSetting} from '../../consts';
import { useDispatch, useSelector} from 'react-redux';
import {postCommentsAction} from '../../store/actions/api-actions';
import {getOffer} from '../../store/selectors/selectors';

function ReviewsForm(): JSX.Element {
  const offer = useSelector(getOffer);

  const dispatch = useDispatch();

  const onSubmit = (commentPost: { id: string, rating: number, comment: string }) => dispatch(postCommentsAction(commentPost));

  const [isSendingRequest, setSendingRequest] = useState(false);

  const [formState, setFormState] = useState({
    rating: {
      value: '',
      isValid: false,
    },
    review: {
      value: '',
      isValid: false,
    },
  });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    Promise.resolve(() => setSendingRequest(true))
      .then(() => onSubmit({
        id: String(offer?.id),
        rating: Number(formState.rating.value),
        comment: formState.review.value,
      }))
      .then(() => setFormState({
        rating: {
          value: '',
          isValid: false,
        },
        review: {
          value: '',
          isValid: false,
        },
      }))
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setSendingRequest(false);
      });
  };

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    let isValid;
    if (name === 'review') {
      isValid = Boolean(value.length >= ReviewSetting.MIN && value.length <= ReviewSetting.MAX);
    } else {
      // если это рейтинг, то любой клик, т.е. любая оценка нам подходит
      isValid = true;
    }

    setFormState({
      ...formState,
      [name]: {
        value,
        isValid,
      },
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingStar.map(({mark, title}) => (
          <React.Fragment key={mark}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              value={mark}
              id={`${mark}-stars`}
              type="radio"
              onChange={handleChange}
              checked={formState.rating.value === String(mark)}
            />
            <label htmlFor={`${mark}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        value={formState.review.value}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">{ReviewSetting.MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={isSendingRequest || !formState.review.isValid || !formState.rating.isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
