import {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {SortTypes} from '../../consts';
import {RootState} from '../../store/reducer/root-reducer';
import {ThunkAppDispatch} from '../../types/action';
import {changeSortType} from '../../store/actions/action';
import {getCurrentSortType} from '../../store/selectors/selectors';

const mapStateToProps = (state: RootState) => ({
  currentSortType: getCurrentSortType(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onChangeSortType: (type: SortTypes) => {
    dispatch(changeSortType(type));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlaceSorting({currentSortType, onChangeSortType}: PropsFromRedux): JSX.Element {
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

export {PlaceSorting};
export default connector(PlaceSorting);
