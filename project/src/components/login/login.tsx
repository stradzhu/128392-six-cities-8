import {Link} from 'react-router-dom';
import {FormEvent, useState, ChangeEvent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {loginAction} from '../../store/actions/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {AuthData} from '../../types/auth-data';
import Header from '../header/header';
import {AppRoute} from '../../consts';

type InputLoginForm = {
  [key: string]: {
    value: string,
    isValid: boolean,
    regex: string,
  }
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
});

const connector = connect(null, mapDispatchToProps);

function Login({onSubmit}: ConnectedProps<typeof connector>): JSX.Element {
  const [formState, setFormState] = useState<InputLoginForm>({
    email: {
      value: '',
      isValid: false,
      regex: '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.+.[a-zA-Z]{2,4}$',
    },
    password: {
      value: '',
      isValid: false,
      regex: '(?=.*[A-Za-zа-яА-Я])(?=.*[0-9])[A-Za-zа-яА-Я0-9]+',
    },
  });

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
    const regExp = new RegExp(formState[name].regex);
    const isValid = regExp.test(value);

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        isValid,
      },
    });
  };


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      login: formState.email.value,
      password: formState.password.value,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header isPageLogin/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange={handleChange} value={formState.email.value} className="login__input form__input"
                  type="email" name="email" placeholder="Email" required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={handleChange} value={formState.password.value} className="login__input form__input"
                  type="password" name="password" placeholder="Password" required
                />
              </div>
              <button disabled={!formState.email.isValid || !formState.password.isValid}
                className="login__submit form__submit button" type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {Login};
export default connector(Login);
