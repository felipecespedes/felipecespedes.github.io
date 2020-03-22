import React from 'react';

const AppContext = React.createContext();

export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component {

  state = {
    theme: null,
  };

  componentDidMount() {
    this.initializeTheme();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <AppContext.Provider
        value={{
          theme,
          onThemeChanged: this.handleThemeChanged
        }}
      >
        { children }
      </AppContext.Provider>
    );
  }

  handleThemeChanged = (theme) => {
    this.setState({ theme });
  }

  initializeTheme() {
    this.setState({ theme: 'dark' });
  }

}
