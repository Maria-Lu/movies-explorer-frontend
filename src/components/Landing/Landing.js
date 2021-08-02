import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function Landing({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main />
      <Footer />
    </>
  );
}

export default Landing;
