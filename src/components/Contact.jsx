import { resumeData } from '../data/resume';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    btn.innerText = "ОТПРАВКА...";
    btn.style.backgroundColor = '#C17F38';
    btn.style.borderColor = '#C17F38';

    setTimeout(() => {
      btn.innerText = "ОТПРАВЛЕНО";
      btn.style.backgroundColor = '#111';
      btn.style.borderColor = '#111';
      e.target.reset();
      setTimeout(() => {
        btn.innerText = originalText;
      }, 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="grid-container border-top">
      <div className="cell grid-half" style={{ background: 'var(--bg-white)' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem 0' }}>
          <h3 className="text-display-md" style={{ marginBottom: '2rem' }}>Связаться со мной</h3>
          <p className="text-body-sm" style={{ marginBottom: '2rem' }}>
            Открыт для новых предложений и интересных проектов. Напишите — обсудим детали.
          </p>

          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Имя</label>
              <input type="text" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">Сообщение</label>
              <textarea className="form-input" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Отправить</button>
          </form>
        </div>
      </div>

      <div className="cell grid-half" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem' }}>
        <div className="text-label" style={{ marginBottom: '1rem' }}>Контакты</div>
        <div style={{ marginBottom: '2rem' }}>
          <div className="text-display-sm">{resumeData.contact.phone}</div>
          <div className="text-display-sm">{resumeData.contact.email}</div>
        </div>

        <div className="text-label" style={{ marginBottom: '1rem' }}>Соцсети</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-body-sm" style={{ borderBottom: '1px solid' }}>LinkedIn</a>
          <a href={`mailto:${resumeData.contact.email}`} className="text-body-sm" style={{ borderBottom: '1px solid' }}>Email</a>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <div className="text-label" style={{ marginBottom: '0.5rem' }}>Локация</div>
          <div className="text-body-sm">{resumeData.contact.location}</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
