import React from 'react';
import { render } from 'react-testing-library';
import ContactCard from './ContactCard';

describe('<ContactCard />', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<ContactCard />);
    const elem = getByTestId('contact-card');
    expect(elem).toBeInTheDocument();
  });
});
