import { resumeData } from '../data/resume';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="grid-container">
      <div className="cell grid-half no-pad" style={{ borderRight: '1px solid var(--border-color)' }}>
        <div style={{
          height: '100%',
          background: '#E5E5E5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '60%',
            height: '70%',
            background: '#dcdad4',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'var(--accent-amber)',
              opacity: 0.8
            }}></div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              color: 'var(--text-primary)',
              opacity: 0.3,
              lineHeight: 0.9,
              marginBottom: '20px'
            }}>
              {resumeData.name.split(' ')[1][0]}.
            </div>
          </div>
        </div>
      </div>
      <div className="cell grid-half" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '80vh'
      }}>
        <span className="text-label">{resumeData.role}</span>
        <h1 className="text-display-lg" style={{ margin: '1rem 0', whiteSpace: 'pre-line' }}>
          {resumeData.hero.title}
        </h1>
        <p className="text-body-sm" style={{ maxWidth: '400px', marginBottom: '2rem' }}>
          {resumeData.hero.description}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn btn-primary" style={{ width: 'auto' }}>Связаться</a>
          <a href="#experience" className="btn btn-outline" style={{ width: 'auto' }}>Опыт</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
