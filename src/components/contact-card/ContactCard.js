import React from 'react';
import './ContactCard.scss';

class ContactCard extends React.Component {

  COMPONENT_CLASS = 'contact-card';

  render() {
    return (
      <section className={`${this.COMPONENT_CLASS} card`} data-testid="contact-card">
        <header className={`${this.COMPONENT_CLASS}__header`}>
          <h1 className={`${this.COMPONENT_CLASS}__title`}>Felipe Céspedes</h1>
        </header>
        <article className={`${this.COMPONENT_CLASS}__content`}>
          <p className={`${this.COMPONENT_CLASS}__bio`}>
            Senior full-stack developer working mostly with web related technologies and open-source software.
          </p>
          <p className={`${this.COMPONENT_CLASS}__contact`}>
            You can reach me on <a href="https://www.linkedin.com/in/andres-felipe-cespedes/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="mailto:felipecespedespisso@gmail.com">Gmail</a>.
          </p>
        </article>
      </section>
    );
  }

}

export default ContactCard;
