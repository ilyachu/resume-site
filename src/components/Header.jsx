import { resumeData } from '../data/resume';
import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <div className="header-logo">
            {resumeData.name.split(' ')[0][0]}.{resumeData.name.split(' ')[1][0]}.
          </div>
          <ul className="header-menu">
            <li><button onClick={() => scrollToSection('profile')}>Обо мне</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Опыт</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Проекты</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Навыки</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Контакты</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
