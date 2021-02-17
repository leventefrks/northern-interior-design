// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import 'fullpage.js/dist/fullpage.css';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  if (isClient) {
    const { default: VueFullPage } = require('vue-fullpage.js');
    Vue.use(VueFullPage);
  }
  Vue.component('Layout', DefaultLayout);
}
