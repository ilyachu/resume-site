import { resumeData } from '../data/resume';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container grid-12">
        <div className="section-header">
          <span className="big-num">06</span>
          <span className="header-title">КОНТАКТЫ</span>
        </div>

        <div className="contact-info">
          <div className="contact-block">
            <h4>Телефон</h4>
            <p>{resumeData.contact.phone}</p>
          </div>
          <div className="contact-block">
            <h4>Email</h4>
            <p>{resumeData.contact.email}</p>
          </div>
          <div className="contact-block">
            <h4>LinkedIn</h4>
            <p>linkedin.com/in/ilyachumachenkov</p>
          </div>
          <div className="contact-block">
            <h4>Локация</h4>
            <p>{resumeData.contact.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
