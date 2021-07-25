import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './AuthPage.css';

function AuthPage({ title, question, children, buttonText, path, linkText }) {
  return (
    <div className="auth-page app__section">
      <header className="auth-header">
        <Logo />
        <h1 className="auth-header__title">{title}</h1>
      </header>
      <main className="auth-content">
        <section className="auth">
          <form className="auth__form">
            {children}
            <button className="button auth__button" type="submit">
              {buttonText}
            </button>
            <div className="auth__container">
              <p className="auth__question">{question}</p>
              <Link to={path} className="link auth__link">
                {linkText}
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AuthPage;
