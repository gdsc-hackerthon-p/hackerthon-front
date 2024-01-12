import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {RecoilRoot} from 'recoil';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <App /> 
    </RecoilRoot>
  </QueryClientProvider>
  </BrowserRouter>
);

reportWebVitals();
