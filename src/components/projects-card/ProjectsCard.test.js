import React from 'react';
import { render } from 'react-testing-library';
import ProjectsCard from './ProjectsCard';

describe('<ProjectsCard />', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<ProjectsCard />);
    const elem = getByTestId('projects-card');
    expect(elem).toBeInTheDocument();
  });
});
