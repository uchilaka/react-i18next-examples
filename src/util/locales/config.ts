import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import translations from './en/translations.json';

const resources = {
  translations
}

const defaultNS = 'translations';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: resources
  },
  defaultNS
});
