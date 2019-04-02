import React from 'react';
import './LinksCard.scss';

class LinksCard extends React.Component {

  COMPONENT_CLASS = 'links-card';
  SITES = [
    {
      name: 'Github Profile',
      url: 'https://github.com/felipecespedes'
    },
    {
      name: 'NPM Packages',
      url: 'https://www.npmjs.com/~viwell'
    },
    {
      name: 'Youtube Channel',
      url: 'https://www.youtube.com/codigea'
    }
  ];

  render() {
    return (
      <section className={`${this.COMPONENT_CLASS} card`}>
        <header className={`${this.COMPONENT_CLASS}__header`}>
          <h1 className={`${this.COMPONENT_CLASS}__title`}>Links</h1>
        </header>
        <article className={`${this.COMPONENT_CLASS}__content`}>
          <ul className={`${this.COMPONENT_CLASS}__sites`}>
            {this.SITES.map((site, i) =>
              <li className={`${this.COMPONENT_CLASS}__site`} key={i}>
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
