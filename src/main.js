import Vue from 'vue';

import App from './App.vue';
import i18n from '../i18n';

const render = h => h(App);

// Create a Vue instance with `i18n` option
new Vue({ i18n, render }).$mount('#app')
