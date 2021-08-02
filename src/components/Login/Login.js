import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import AuthPage from '../AuthPage/AuthPage';

function Login({ onLogin, message, showMessage }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const { email, password } = values;

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({
      email,
      password,
    });
    resetForm();
  }

  return (
    <AuthPage
      title="Рады видеть!"
      buttonText="Войти"
      question="Ещё не зарегистрированы?"
      path="/signup"
      linkText="Регистрация"
      onSubmit={handleSubmit}
      isValid={isValid}
      message={message}
      showMessage={showMessage}
    >
      <label className="auth__field">
        E-mail
        <input
          name="email"
          type="email"
          className="auth__input"
          required
          autoComplete="off"
          onChange={handleChange}
          value={email || ''}
        />
      </label>
      <span className="auth__error">{errors.email}</span>
      <label className="auth__field">
        Пароль
        <input
          name="password"
          type="password"
          className="auth__input"
          required
          autoComplete="off"
          onChange={handleChange}
          value={password || ''}
        />
      </label>
      <span className="auth__error">{errors.password}</span>
    </AuthPage>
  );
}

export default Login;
