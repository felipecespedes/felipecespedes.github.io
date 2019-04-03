import React, { Component } from 'react';
import './App.scss';
import ContactCard from './components/contact-card/ContactCard';
import LinksCard from './components/links-card/LinksCard';
import ProjectsCard from './components/projects-card/ProjectsCard';
import ReactGA from 'react-ga';

class App extends Component {
  render() {
    return (
      <div className="app" data-testid="app">
        <ContactCard />
        <ProjectsCard />
        <LinksCard />
      </div>
    );
  }

  componentDidMount() {
    if (this.isInProduction()) {
      this.initializeReactGA();
    }
  }

  initializeReactGA() {
    ReactGA.initialize('UA-137663539-1');
    ReactGA.pageview('/homepage');
  }

  isInProduction() {
    const productionHostnames = ['felipecespedes.github.io'];
    const { hostname } = window.location;
    let isInProduction = false;
    if (productionHostnames.includes(hostname)) {
      isInProduction = true;
    }

    return isInProduction;
  }
}

export default App;
