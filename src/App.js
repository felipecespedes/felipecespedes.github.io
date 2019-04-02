import React, { Component } from 'react';
import './App.scss';
import ContactCard from './components/contact-card/ContactCard';
import LinksCard from './components/links-card/LinksCard';
import ProjectsCard from './components/projects-card/ProjectsCard';

class App extends Component {
  render() {
    return (
      <div className="app" data-testid="app">
        <ContactCard />
        <LinksCard />
        <ProjectsCard />
      </div>
    );
  }
}

export default App;
