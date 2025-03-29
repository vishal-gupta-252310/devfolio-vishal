// packages
import React from 'react';
import { createRoot } from 'react-dom/client';

// components
import App from './App.jsx';

// render
const root = createRoot(document.getElementById('react-root'));
root.render(<App />);
