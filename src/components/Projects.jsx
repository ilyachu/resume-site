import { resumeData } from '../data/resume';
import './Projects.css';

const ProjectColors = ['#e8e4df', '#dfdfe4', '#e4dfdd', '#dfe4df', '#e4dfe4'];

function Projects() {
  return (
    <section id="projects" className="container grid-12 section-pad">
      <div className="section-header">
        <span className="big-num">04</span>
        <span className="header-title">ПРОЕКТЫ</span>
      </div>

      <div className="filter-bar">
        <button className="filter-btn active">Все</button>
        <button className="filter-btn">CRM</button>
        <button className="filter-btn">AI</button>
        <button className="filter-btn">Финансы</button>
      </div>

      <div className="project-grid">
        {resumeData.projects.map((project, index) => (
          <div key={project.id} className="project-card">
            <div style={{
              width: '100%',
              height: '250px',
              background: ProjectColors[index % ProjectColors.length],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                fontFamily: 'var(--f-condensed)',
                fontSize: '4rem',
                color: 'var(--c-copper)',
                opacity: 0.4,
                fontWeight: 300
              }}>
                0{index + 1}
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                fontFamily: 'var(--f-condensed)',
                fontSize: '0.7rem',
                color: 'var(--c-copper)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '0.5rem'
              }}>
                {project.categoryName}
              </div>
              <h3 style={{
                fontFamily: 'var(--f-serif)',
                fontSize: '1.4rem',
                marginBottom: '0.75rem',
                fontWeight: 400
              }}>
                {project.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--c-slate-med)',
                marginBottom: '1rem',
                lineHeight: 1.5
              }}>
                {project.description}
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#888',
                  marginBottom: '0.5rem'
                }}>
                  Результаты:
                </div>
                <ul style={{
                  fontSize: '0.85rem',
                  color: 'var(--c-slate-med)',
                  paddingLeft: '1rem',
                  lineHeight: 1.6
                }}>
                  {project.results.map((result, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>{result}</li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{
                    padding: '0.25rem 0.75rem',
                    border: '1px solid var(--c-line)',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {tag}
                  </span>
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
