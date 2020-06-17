import React from 'react';
import ReactDOM from 'react-dom';
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react';
import App from './App';
import './styles.scss';
import 'bulma/bulma.sass';
import '@fortawesome/fontawesome-free/css/all.css';

Bugsnag.start({
  apiKey: process.env.REACT_APP_BUGSNAG_KEY,
  plugins: [new BugsnagPluginReact()]
});

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
