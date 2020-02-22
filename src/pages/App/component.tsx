import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../routes';
import ErrorBoundary from './ErrorBoundary';
import {PageView} from '../../components';


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