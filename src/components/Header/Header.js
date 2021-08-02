import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn }) {
  return (
    <header className="header section app__section">
      <Logo />
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
