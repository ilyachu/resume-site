import { resumeData } from '../data/resume';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            {resumeData.name.split(' ')[0][0]}.{resumeData.name.split(' ')[1][0]}.
          </div>
          <p className="footer-text">
            {currentYear} {resumeData.name} — Операционный менеджер
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
