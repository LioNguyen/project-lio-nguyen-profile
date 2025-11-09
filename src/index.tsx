import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { I18nProvider } from '@/core/i18n';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nProvider defaultLocale="en">
        <App />
      </I18nProvider>
    </BrowserRouter>
  </React.StrictMode>
);
