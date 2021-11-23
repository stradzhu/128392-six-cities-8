import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {logoutAction} from '../../store/actions/api-actions';
import {getAuthorizationStatus, getUserInfo} from '../../store/selectors/selectors';

type HeaderProps = {
  isPageLogin?: boolean
}

function Header({isPageLogin = false}: HeaderProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const userInfo = useSelector(getUserInfo);

  const dispatch = useDispatch();

  const onClickLogoutAction = () => {
    dispatch(logoutAction());
  };

  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to='/'>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {!isPageLogin &&
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthenticated ? AppRoute.Favorites : AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"/>
                  {isAuthenticated ?
                    <span className="header__user-name user__name">{isAuthenticated ? userInfo?.email : 'Sign in'}</span> :
                    <span className="header__login">{isAuthenticated ? userInfo?.email : 'Sign in'}</span>}
                </Link>
              </li>
              {isAuthenticated &&
              <li className="header__nav-item">
                <Link className="header__nav-link" to="#" onClick={onClickLogoutAction}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>}
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
