import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            target="_blank"
            href="https://maria-lu.github.io/how-to-learn/index.html"
            rel="noreferrer"
            className="link portfolio__link"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            target="_blank"
            href="https://maria-lu.github.io/russian-travel/index.html"
            rel="noreferrer"
            className="link portfolio__link"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            target="_blank"
            href="https://github.com/Maria-Lu/react-mesto-api-full"
            rel="noreferrer"
            className="link portfolio__link"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
