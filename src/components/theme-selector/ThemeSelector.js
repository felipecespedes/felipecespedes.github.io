import React, { Component } from 'react';
import './ThemeSelector.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { AppConsumer } from '../../providers/AppContext';

class ThemeSelector extends Component {

  COMPONENT_CLASS = 'theme-selector';

  render() {
    return (
      <AppConsumer>
        { ({ theme, onThemeChanged }) => (
          <div className={`${this.COMPONENT_CLASS}`}>
            <button
              className={`${this.COMPONENT_CLASS}__toggle-button`}
              title={theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
              onClick={this.handleToggleButtonPressed.bind(this, theme, onThemeChanged)}
            >
              { this.renderIcon(theme) }
            </button>
          </div>
        ) }
      </AppConsumer>
    );
  }

  renderIcon(theme) {
    const isDark = theme === 'dark';
    const icon = isDark ? faSun : faMoon;
    const color = isDark ? '#000' : '#fff';

    return <FontAwesomeIcon className={`${this.COMPONENT_CLASS}__icon`} icon={icon} color={color} />;
  }

  handleToggleButtonPressed = (theme, onThemeChanged) => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    onThemeChanged(newTheme);
  }

}

export default ThemeSelector;
