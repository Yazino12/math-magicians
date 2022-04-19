import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Calculator from './components/Calculator';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Calculator />);
