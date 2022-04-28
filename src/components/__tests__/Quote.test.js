import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../Quote';

describe('Quote component test', () => {
  test('Renders', () => {
    const quote = render(<Quote />);

    expect(quote).toMatchSnapshot();
  });
});
