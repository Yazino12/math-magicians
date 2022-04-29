import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container />
    </Router>
  );
}

export default App;
