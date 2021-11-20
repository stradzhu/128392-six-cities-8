import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {OfferType} from '../../types/offer-info';
import {ThunkAppDispatch} from '../../types/action';
import {getRating} from '../../utils';
import {fetchSetFavoriteAction} from '../../store/api-actions';

type CardProps = {
  offer: OfferType,
  blockClass: string,
  elementClass: string,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSetFavorite: (id: number, status: boolean) => {
    dispatch(fetchSetFavoriteAction(id, status));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CardProps;

/* эх, "удобная" разметка http://joxi.ru/gmvKkjKhewq832 поэтому я передаю 2 дополнительных css класса */
function Card({offer, blockClass, elementClass, onMouseEnter, onMouseLeave, onSetFavorite}: ConnectedComponentProps): JSX.Element {
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
          <button className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button" onClick={() => onSetFavorite(offer.id, !offer.isFavorite)}
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

export {Card};
export default connector(Card);
