import { resumeData } from '../data/resume';
import './Hero.css';

function Hero() {
  return (
    <header id="hero" className="container grid-12 section-pad hero">
      <div className="hero-text">
        <span className="text-label" style={{ color: 'var(--c-copper)', marginBottom: '1rem', display: 'block' }}>
          {resumeData.hero.subtitle}
        </span>
        <h1>
          {resumeData.hero.title.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <p style={{ marginTop: '1.5rem', maxWidth: '90%' }}>{resumeData.hero.description}</p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <a href="#contact" style={{
            background: 'var(--c-copper)',
            color: '#fff',
            padding: '0.75rem 2rem',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: 'var(--f-condensed)'
          }}>
            Связаться
          </a>
          <a href="#experience" style={{
            border: '1px solid var(--c-slate-dark)',
            padding: '0.75rem 2rem',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: 'var(--f-condensed)'
          }}>
            Опыт
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={resumeData.photo}
          alt={resumeData.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(20%)',
            display: 'block'
          }}
        />
      </div>
    </header>
  );
}

export default Hero;
