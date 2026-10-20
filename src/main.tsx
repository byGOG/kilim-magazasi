import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './storefront';
import './styles.css';
import './catalog.css';
import './modern.css';
import './interactions.css';
import './atelier.css';

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
