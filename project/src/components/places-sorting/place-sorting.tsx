import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SortTypes} from '../../consts';
import {changeSortType} from '../../store/actions/action';
import {getCurrentSortType} from '../../store/selectors/selectors';

function PlaceSorting(): JSX.Element {
  const currentSortType = useSelector(getCurrentSortType);

  const dispatch = useDispatch();

  const onChangeSortType = (type: SortTypes) => {
    dispatch(changeSortType(type));
  };

  const [isOpenSort, setOpenSort] = useState(false);

  const handleToggleSort = () => {
    setOpenSort(!isOpenSort);
  };

  const handleClickItemSort = (type: SortTypes) => {
    onChangeSortType(type);
    setOpenSort(!isOpenSort);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleSort}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSort && 'places__options--opened'}`}>
        {Object.values(SortTypes).map((item) => (
          <li key={item} className={`places__option ${currentSortType === item && 'places__option--active'}`}
            tabIndex={0} onClick={() => handleClickItemSort(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlaceSorting;
