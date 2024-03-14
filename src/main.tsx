import { ThemeProvider } from '@ui5/webcomponents-react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);