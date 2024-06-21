import React from 'react';

const Projects = () => {
  const projects = [
    { 'All my projects are avaialble Here' :"https://github.com/prabodh2"},
    ];

  return (
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            {projects.map((project, index) => (
            <li key={index}>{Object.keys(project)[0]} : <a href
            ={Object.values(project)[0]}>{Object.values(project)[0]}</a></li>
            ))}
        </ul>
    </section>
  );
};

export default Projects;
