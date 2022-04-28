import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';

describe('Calculator component test', () => {
  test('Renders', () => {
    const calculator = render(<Calculator />);

    expect(calculator).toMatchSnapshot();
  });

  test('Renders and has last row', () => {
    render(<Calculator />);

    const firstRow = screen.getByRole('row', { name: /0 . =/i });
    expect(firstRow).toBeInTheDocument();
  });
});
