import React from 'react';
import './ContactCard.scss';

class ContactCard extends React.Component {

  COMPONENT_CLASS = 'contact-card';

  render() {
    return (
      <section className={`${this.COMPONENT_CLASS} card`} data-testid="contact-card">
        <header className={`${this.COMPONENT_CLASS}__header`}>
          <h1 className={`${this.COMPONENT_CLASS}__title`}>Felipe Céspedes</h1>
          <img src="/img/avatar.png" alt="avatar" className={`${this.COMPONENT_CLASS}__avatar`}></img>
        </header>
        <article className={`${this.COMPONENT_CLASS}__content`}>
          <p className={`${this.COMPONENT_CLASS}__bio`}>
            Senior software developer working mostly with web related technologies and open-source software.
          </p>
          <p className={`${this.COMPONENT_CLASS}__contact`}>
            You can reach me on <a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-c%C3%A9spedes-985374113/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="mailto:felipecespedespisso@gmail.com">Gmail</a>.
          </p>
        </article>
      </section>
    );
  }

}

export default ContactCard;
