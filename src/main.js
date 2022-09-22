import { createApp } from 'vue';

//import root component...
import App from '@/App';

import router from '@/router';
import store from './store/store';

//import base global components...
import BaseButton from './ui/BaseButton';
import BaseCard from './ui/BaseCard';
import BaseBadge from './ui/BaseBadge';
import BaseSpinner from './ui/BaseSpinner'

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card',BaseCard);
app.component('base-badge',BaseBadge);
app.component('base-button',BaseButton);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
