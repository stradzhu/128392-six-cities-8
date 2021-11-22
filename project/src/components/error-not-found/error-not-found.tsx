import {Link} from 'react-router-dom';
import Header from '../header/header';

function ErrorNotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">Страница не найдена</b>
              <p className="cities__status-description" style={{maxWidth: 630}}>
                Возможно она была, но исчезла из-за катастрофически быстрого сжатия под воздействием гравитационных сил.
                Но это не точно ;) <Link to='/' style={{textDecoration: 'underline'}}>Вернуться на главную страницу</Link>
              </p>
              <hr/>
              <p className="cities__status-description">
                &copy; <a href="https://htmlacademy.ru/404" target="_blank" rel="noreferrer">HTML Academy</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorNotFound;
