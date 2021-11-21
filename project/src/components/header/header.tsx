import {Link} from 'react-router-dom';
import {RootState} from '../../store/reducer/root-reducer';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {ThunkAppDispatch} from '../../types/action';
import {logoutAction} from '../../store/actions/api-actions';

type HeaderProps = {
  isPageLogin?: boolean
}

const mapStateToProps = ({USER: {authorizationStatus, userInfo}}: RootState) => ({
  authorizationStatus,
  userInfo,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickLogoutAction: () => {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & HeaderProps;

function Header({
  authorizationStatus,
  onClickLogoutAction,
  userInfo,
  isPageLogin = false,
}: ConnectedComponentProps): JSX.Element {
  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {/* подсказка на будущее: к ссылке может добавляться класс header__logo-link--active */}
            <Link className="header__logo-link" to='/'>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {!isPageLogin &&
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthenticated &&
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"/>
                  <span className="header__user-name user__name">{userInfo?.email}</span>
                </Link>
              </li>}
              <li className="header__nav-item">
                {isAuthenticated ?
                  <Link className="header__nav-link" to="#" onClick={onClickLogoutAction}>
                    <span className="header__signout">Sign out</span>
                  </Link> :
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>}
              </li>
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}

export {Header};
export default connector(Header);
