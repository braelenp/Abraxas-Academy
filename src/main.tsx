import './polyfills';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SolanaProvider } from './providers/SolanaProvider';
import { MembershipProvider } from './providers/MembershipProvider';
import { ManifestoProvider } from './providers/ManifestoProvider';
import { OrionProvider } from './providers/OrionProvider';
import './styles.css';
import '@solana/wallet-adapter-react-ui/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SolanaProvider>
        <MembershipProvider>
          <ManifestoProvider>
            <OrionProvider>
              <App />
            </OrionProvider>
          </ManifestoProvider>
        </MembershipProvider>
      </SolanaProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
