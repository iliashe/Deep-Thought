import '@babel/polyfill';
import 'mutationobserver-shim';
import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import store from './store/store'

createApp(App).use(store).use(Quasar, quasarUserOptions).mount('#app');
