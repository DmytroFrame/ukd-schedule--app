import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {QueryClient, QueryClientProvider} from "react-query";
import ReactGA from 'react-ga';

ReactGA.initialize('G-T0J9PFTRXQ');

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
  </React.StrictMode>,
)
