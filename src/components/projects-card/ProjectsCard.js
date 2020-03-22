import React from 'react';
import './ProjectsCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from  '@fortawesome/free-brands-svg-icons';

class ProjectsCard extends React.Component {

  COMPONENT_CLASS = 'projects-card';
  PROJECTS = [
    {
      name: 'Viwell Framework',
      url: 'https://github.com/felipecespedes/viwell-framework',
      icon: faGithub
    },
    {
      name: 'Your Own MVC Framework',
      url: 'https://github.com/felipecespedes/your-own-mvc-framework',
      icon: faGithub
    },
    {
      name: 'ng-letter-avatar',
      url: 'https://github.com/felipecespedes/ng-letter-avatar',
      icon: faGithub
    },
    {
      name: 'ng-elastic-input',
      url: 'https://github.com/felipecespedes/ng-elastic-input',
      icon: faGithub
    },
    {
      name: 'gpio-omega2',
      url: 'https://github.com/felipecespedes/gpio-omega2',
      icon: faGithub
    }
  ];

  render() {
    return (
      <section className={`${this.COMPONENT_CLASS} card`} data-testid="projects-card">
        <header className={`${this.COMPONENT_CLASS}__header`}>
          <h2 className={`${this.COMPONENT_CLASS}__title`}>Projects</h2>
        </header>
        <article className={`${this.COMPONENT_CLASS}__content`}>
          <p className={`${this.COMPONENT_CLASS}__info`}>
            These are some of my projects. You can find these and more on my <a href="https://github.com/felipecespedes" target="_blank" rel="noopener noreferrer">Github Profile</a>.
          </p>
          <ul className={`${this.COMPONENT_CLASS}__projects`}>
            {this.PROJECTS.map((project, i) =>
              <li className={`${this.COMPONENT_CLASS}__project`} key={i}>
                <FontAwesomeIcon className={`${this.COMPONENT_CLASS}__icon`} icon={project.icon} />
                <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
              </li>
            )}
          </ul>
        </article>
      </section>
    );
  }

}

export default ProjectsCard;
