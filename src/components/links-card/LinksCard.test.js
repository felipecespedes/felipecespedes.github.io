import React from 'react';
import { render } from 'react-testing-library';
import LinksCard from './LinksCard';

describe('<LinksCard />', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<LinksCard />);
    const elem = getByTestId('links-card');
    expect(elem).toBeInTheDocument();
  });
});
