import { resumeData } from '../data/resume';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid-container">
      <div className="cell grid-quarter no-pad" style={{ border: 'none', paddingRight: '2rem' }}>
        <div className="footer-logo" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          marginBottom: '1rem'
        }}>
          {resumeData.name.split(' ')[0][0]}.{resumeData.name.split(' ')[1][0]}.
        </div>
        <p className="text-body-sm">
          © {currentYear} {resumeData.name}.<br />
          {resumeData.contact.location}
        </p>
      </div>
      <div className="cell grid-quarter no-pad" style={{ border: 'none' }}>
        <div className="text-label" style={{ marginBottom: '1rem' }}>Навигация</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a href="#hero" className="text-body-sm">Главная</a>
          <a href="#profile" className="text-body-sm">Обо мне</a>
          <a href="#experience" className="text-body-sm">Опыт</a>
          <a href="#projects" className="text-body-sm">Проекты</a>
          <a href="#contact" className="text-body-sm">Контакты</a>
        </div>
      </div>
      <div className="cell grid-quarter no-pad" style={{ border: 'none' }}>
        <div className="text-label" style={{ marginBottom: '1rem' }}>Контакты</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a href={`tel:${resumeData.contact.phone.replace(/\s/g, '')}`} className="text-body-sm">{resumeData.contact.phone}</a>
          <a href={`mailto:${resumeData.contact.email}`} className="text-body-sm">{resumeData.contact.email}</a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-body-sm">LinkedIn</a>
        </div>
      </div>
      <div className="cell grid-quarter no-pad" style={{ border: 'none' }}>
        <div className="text-label" style={{ marginBottom: '1rem' }}>Языки</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {resumeData.languages.map((lang, index) => (
            <div key={index} className="text-body-sm">
              <span style={{ fontWeight: 500 }}>{lang.name}</span> — {lang.level}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
