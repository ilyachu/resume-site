import { resumeData } from '../data/resume';
import './Hero.css';

function Hero() {
  return (
    <header id="hero" className="container grid-12 section-pad hero">
      <div className="hero-text">
        <h1>
          {resumeData.hero.title.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <p>{resumeData.hero.description}</p>
      </div>
      <div className="hero-image">
        <div style={{
          width: '100%',
          height: '100%',
          background: '#e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            fontFamily: 'var(--f-serif)',
            fontSize: '12rem',
            color: 'var(--c-copper)',
            opacity: 0.3,
            fontWeight: 700
          }}>
            {resumeData.initials}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
