import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('Home component test', () => {
  test('Renders', () => {
    const home = render(<Home />);

    expect(home).toMatchSnapshot();
  });
});
