//import '@babel/polyfill';
//import 'mutationobserver-shim';
import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import store from './vuex/store';
import VeeValidatePlugin from './js/plugins/validation';


const app = createApp(App)

app.use(store);
app.use(Quasar, quasarUserOptions);
app.use(VeeValidatePlugin);

app.mount('#app');
