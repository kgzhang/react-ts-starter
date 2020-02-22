/**
 *
 * Entry point of the app
 */
import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import { initializeAnalytics } from './analytics';
import { Root } from './pages';
import { register as registerServiceWorker } from './serviceWorkerRegistration';

import './styles/index.scss';



function render() {
  const rootElementId = 'root';
  const rootElement = document.getElementById(rootElementId);

  if (!rootElement) {
    throw new Error(`${rootElementId} element not found`);
  }

  ReactDOM.render(<Root />, rootElement);
}

export function startApplication() {
  initializeAnalytics();

  render();

  registerServiceWorker();
}

