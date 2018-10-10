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
          online: 'Online',
          triangle: 'Triangles',
          compare: 'Compare',
          comparator: 'Comparator',
          similar: 'Similar',
          are: 'are',
          arenot: 'are not',
          and: 'and',
          coordinates: 'coordinates',
          shift: 'Shift',
          rotate: 'Rotate',
          point: 'Point',
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
  t: PropTypes.func.isRequired,
};

ReactDOM.render(<AppWithI18n />, document.getElementById('root'));
registerServiceWorker();
