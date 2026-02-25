import { resumeData } from '../data/resume';
import './Header.css';

function Header() {
  return (
    <nav>
      <div className="container nav-inner">
        <a href="#hero" className="logo-mark">{resumeData.initials}</a>
        <div className="nav-links">
          <a href="#profile">Обо мне</a>
          <a href="#competencies">Компетенции</a>
          <a href="#experience">Опыт</a>
          <a href="#projects">Работа</a>
          <a href="#contact">Контакты</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
