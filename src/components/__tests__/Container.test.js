import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from '../Container';

describe('Container test', () => {
  test('Renders', () => {
    const container = render(
      <Router>
        <Container />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });

  test('Checks if home page content is there by checking the title', () => {
    render(
      <Router>
        <Container />
      </Router>,
    );

    expect(
      screen.getByRole('heading', { name: /Welcome to our page!/i }),
    ).toBeInTheDocument();
  });

  test('Navigates to calculator page and finds the title', () => {
    render(
      <Router>
        <Container />
      </Router>,
    );

    const calcultorPage = screen.getByRole('link', { name: /calculator/i });
    fireEvent.click(calcultorPage);

    expect(
      screen.getByRole('heading', { name: /Lets do some Math/i }),
    ).toBeInTheDocument();
  });

  test('Navigates to quote page and finds the quote', () => {
    render(
      <Router>
        <Container />
      </Router>,
    );

    const quotePage = screen.getByRole('link', { name: /quote/i });
    fireEvent.click(quotePage);

    const quote = screen.getByText(
      /Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding\./i,
    );

    expect(quote).toBeInTheDocument();
  });
});
