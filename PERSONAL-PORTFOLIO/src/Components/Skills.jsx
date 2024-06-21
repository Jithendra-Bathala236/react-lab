import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'CSS', 'HTML', 'C++', 'Python', 'Git', 'GitHub', 'HTML5', 'CSS3', 'Nocode Platform', 'Scartch programming', 'Software Requirement Specifications'];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
