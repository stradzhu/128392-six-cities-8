import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {OfferType} from '../../types/offer-info';
import {getRating} from '../../utils/utils';
import {fetchSetFavoriteAction} from '../../store/actions/api-actions';
import {getAuthorizationStatus} from '../../store/selectors/selectors';
import {AuthorizationStatus} from '../../consts';

type CardProps = {
  offer: OfferType,
  blockClass: string,
  elementClass: string,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
}

/* эх, "удобная" разметка http://joxi.ru/gmvKkjKhewq832 поэтому я передаю 2 дополнительных css класса */
function Card({offer, blockClass, elementClass, onMouseEnter, onMouseLeave}: CardProps): JSX.Element {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;
  const isFavorite = isAuthenticated ? offer.isFavorite : false;

  const onSetFavorite = (id: number, status: boolean) => {
    dispatch(fetchSetFavoriteAction(id, status));
  };

  return (
    <article className={`${blockClass} place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className={`${elementClass} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt=""/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button" onClick={() => onSetFavorite(offer.id, !isFavorite)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(offer.rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
