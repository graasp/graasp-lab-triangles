import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { withI18n, reactI18nextModule } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
          online: 'Online',
          triangle: 'Triangles',
          comparator: 'Comparator',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
const AppWithI18n = withI18n()(App);

App.propTypes = {
  t: PropTypes.string.isRequired,
};

ReactDOM.render(<AppWithI18n />, document.getElementById('root'));
registerServiceWorker();
