import { resumeData } from '../data/resume';
import './Certificates.css';

function Certificates() {
  return (
    <section id="certificates" className="grid-container border-top">
      <div className="cell grid-quarter">
        <div className="sticky-label text-label">Сертификаты</div>
      </div>
      <div className="cell grid-threequarter">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {resumeData.certificates.map((cert) => (
            <div key={cert.id} style={{
              padding: '1.5rem',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-white)'
            }}>
              <span className="text-label" style={{ color: 'var(--accent-amber)', marginBottom: '0.5rem', display: 'block' }}>
                {cert.year}
              </span>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{cert.title}</h4>
              <p className="text-body-sm">{cert.issuer}</p>
              {cert.description && (
                <p className="text-body-sm" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>{cert.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
