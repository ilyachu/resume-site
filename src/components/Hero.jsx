import { resumeData } from '../data/resume';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-label">Операционный менеджер</span>
          <h1 className="hero-name">{resumeData.name}</h1>
          <p className="hero-tagline">{resumeData.tagline}</p>
          <div className="hero-divider"></div>
          <p className="hero-location">{resumeData.contact.location}</p>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
