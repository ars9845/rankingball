import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./js/translations/en/common.json";
import common_ko from "./js/translations/ko/common.json";
import Layout from './Layout';
import './css/default.css';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        ko: {
            common: common_ko
        },
    },
});

ReactDOM.render(<I18nextProvider i18n={i18next}><Layout /></I18nextProvider>,document.getElementById('wrap'));

