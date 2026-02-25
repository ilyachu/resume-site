import { resumeData } from '../data/resume';
import './Certificates.css';

function Certificates() {
  return (
    <section className="section certificates">
      <div className="container">
        <div className="grid">
          <div className="certificates-title-col">
            <h2 className="section-title">Сертификаты</h2>
          </div>
          <div className="certificates-list-col">
            <div className="certificates-list">
              {resumeData.certificates.map((cert, index) => (
                <div key={cert.id} className="certificate-item">
                  <span className="certificate-year">{cert.year}</span>
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
