import React from 'react';



export default function Project({ projects }) {
  return (
    projects.map((project) => (<div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-web" key={project.id}>
      <div className="project-img">
        <img className="img-fluid" src={project.src} alt={project.alt} />  <div className="portfolio-info">
          <h4>{project.title}</h4>
          <div className="card-text">
            {project.tech.map((item) => (
              <small key={project.tech.indexOf(item)}>{item}</small>)
            )}
          </div><div className="links">
            <a href={project.repo} className="details-link" title="CODE" rel="noopener noreferrer" target="_blank">CODE</a>


            <a href={project.demo} className="details-link" title="DEMO" rel="noopener noreferrer" target="_blank">DEMO</a></div>
        </div></div>




    </div>
    ))
  );
}
