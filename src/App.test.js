import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<App />);
    const elem = getByTestId('app');
    expect(elem).toBeInTheDocument();
  });
});
