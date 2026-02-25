import { resumeData } from '../data/resume';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="grid">
          <div className="contact-title-col">
            <h2 className="section-title">Контакты</h2>
          </div>
          <div className="contact-content-col">
            <div className="contact-list">
              <a href={`tel:${resumeData.contact.phone.replace(/\s/g, '')}`} className="contact-item">
                <span className="contact-label">Телефон</span>
                <span className="contact-value">{resumeData.contact.phone}</span>
              </a>
              <a href={`mailto:${resumeData.contact.email}`} className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">{resumeData.contact.email}</span>
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">linkedin.com/in/ilyachumachenkov</span>
              </a>
              <div className="contact-item">
                <span className="contact-label">Локация</span>
                <span className="contact-value">{resumeData.contact.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
