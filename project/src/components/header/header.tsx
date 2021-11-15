import {Link} from 'react-router-dom';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {AuthorizationStatus} from '../../consts';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {signOut} from '../../store/action';

type HeaderProps = {
  pageLogin?: boolean
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onClickSignOut: () => {
    dispatch(signOut());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & HeaderProps;

function Header({authorizationStatus, onClickSignOut, pageLogin = false}: ConnectedComponentProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {/* подсказка на будущее: к ссылке может добавляться класс header__logo-link--active */}
            <Link className="header__logo-link" to='/'>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {!pageLogin &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>}
                <li className="header__nav-item">
                  {authorizationStatus === AuthorizationStatus.Auth ?
                    <Link className="header__nav-link" to="/" onClick={onClickSignOut}>
                      <span className="header__signout">Sign out</span>
                    </Link> :
                    <Link className="header__nav-link" to="/login">
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
