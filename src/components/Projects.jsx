import { resumeData } from '../data/resume';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="grid">
          <div className="projects-title-col">
            <h2 className="section-title">Проекты</h2>
          </div>
          <div className="projects-list-col">
            <div className="projects-grid">
              {resumeData.projects.map((project, index) => (
                <article key={project.id} className="project-card">
                  <div className="project-card-inner">
                    <span className="project-number">0{index + 1}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
