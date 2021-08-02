import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';
import avatar from '../../images/student/avatar.png';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="student section">
      <SectionTitle name="Студент" id="about-me" />
      <div className="student__container">
        <section className="student__info">
          <h3 className="student__name">Мария</h3>
          <p className="student__about">Веб-разработчик, 30 лет</p>
          <p className="student__paragraph">
            Живу в Ростове-на-Дону, закончила юридический факультет ЮФУ. Год
            назад работала руководителем юридической службы, потом увлеклась
            программированием и веб-разработкой. Люблю литературу, живопись,
            дизайн и новые технологии.
          </p>
          <ul className="student__links">
            <li className="student__links-item">
              <a
                target="_blank"
                href="https://ru-ru.facebook.com/"
                rel="noreferrer"
                className="link student__link"
              >
                Facebook
              </a>
            </li>
            <li className="student__links-item">
              <a
                target="_blank"
                href="https://github.com/"
                rel="noreferrer"
                className="link student__link"
              >
                Github
              </a>
            </li>
          </ul>
        </section>
        <img
          className="student__image"
          src={avatar}
          alt="Фотография студента"
        />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
