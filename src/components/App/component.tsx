import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import ErrorBoundary from './ErrorBoundary';
// import GloablStyle from './GlobalStyle';
import PageView from '../PageView';


export type AppProps = Readonly<{}>;


export const App: React.FC<AppProps> = () => (
  <>
    <Router>
      <ErrorBoundary>
        <PageView />
        <Routes />
      </ErrorBoundary>
    </Router>
  </>
);

export default App;