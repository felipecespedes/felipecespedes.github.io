import React from 'react';
import './LinksCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm, faYoutube } from  '@fortawesome/free-brands-svg-icons';

class LinksCard extends React.Component {

  COMPONENT_CLASS = 'links-card';
  SITES = [
    {
      name: 'Github Profile',
      url: 'https://github.com/felipecespedes',
      icon: faGithub
    },
    {
      name: 'NPM Packages',
      url: 'https://www.npmjs.com/~viwell',
      icon: faNpm
    },
    {
      name: 'Youtube Channel',
      url: 'https://www.youtube.com/codigea',
      icon: faYoutube
    }
  ];

  render() {
    return (
      <section className={`${this.COMPONENT_CLASS} card`} data-testid="links-card">
        <header className={`${this.COMPONENT_CLASS}__header`}>
          <h2 className={`${this.COMPONENT_CLASS}__title`}>Links</h2>
        </header>
        <article className={`${this.COMPONENT_CLASS}__content`}>
          <ul className={`${this.COMPONENT_CLASS}__sites`}>
            {this.SITES.map((site, i) =>
              <li className={`${this.COMPONENT_CLASS}__site`} key={i}>
                <FontAwesomeIcon className={`${this.COMPONENT_CLASS}__icon`} icon={site.icon} />
                <a href={site.url} target="_blank" rel="noopener noreferrer">{site.name}</a>
              </li>
            )}
          </ul>
        </article>
      </section>
    );
  }

}

export default LinksCard;
