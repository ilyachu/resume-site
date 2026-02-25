import { resumeData } from '../data/resume';
import './Projects.css';

const ProjectColors = ['#e8e4df', '#dfdfe4', '#e4dfdd', '#dfe4df'];

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
              height: '300px',
              background: ProjectColors[index % ProjectColors.length],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                fontFamily: 'var(--f-condensed)',
                fontSize: '3rem',
                color: 'var(--c-copper)',
                opacity: 0.5
              }}>
                {index + 1}
              </div>
            </div>
            <div className="project-overlay">
              <div className="project-cat">{project.categoryName}</div>
              <h3 className="project-title">{project.title}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>ПОДРОБНЕЕ</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
