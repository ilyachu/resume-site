import { resumeData } from '../data/resume';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="border-top">
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h3 className="text-display-md">Реализованные проекты</h3>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', paddingBottom: '2rem', flexWrap: 'wrap' }}>
        <button className="pill" style={{ borderColor: 'var(--text-primary)', background: 'var(--text-primary)', color: 'white' }}>Все</button>
        {resumeData.projects.map((project) => (
          <button key={project.id} className="pill">{project.category}</button>
        ))}
      </div>

      <div className="grid-container" style={{ borderTop: 'var(--grid-line-width) solid var(--border-color)' }}>
        {resumeData.projects.map((project, index) => (
          <div key={project.id} className="cell grid-quarter no-pad project-card">
            <div className="card-image-wrapper">
              <div style={{
                width: '100%',
                height: '100%',
                background: index % 2 === 0 ? '#e0ded6' : '#d6dbe0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: `${40 + (index * 20)}px`,
                  background: '#333'
                }}></div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">{project.category}</div>
              <h4 className="accordion-title">{project.title}</h4>
              <p className="text-body-sm">{project.description}</p>
              <div className="pill-container" style={{ marginTop: 'auto' }}>
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="pill" style={{ fontSize: '0.65rem', padding: '0.3rem 0.8rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
