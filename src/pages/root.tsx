import { hot } from 'react-hot-loader/root';
import React, { StrictMode } from 'react';
import App from './App'




export const root: React.FunctionComponent = () => (
  <StrictMode>
    <App />
  </StrictMode>
);


export default hot(root);