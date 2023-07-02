import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider, NormalizeCSS } from '@mantine/core';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider>
      <NormalizeCSS />
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
