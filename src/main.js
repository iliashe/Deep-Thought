//import '@babel/polyfill';
//import 'mutationobserver-shim';
import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import store from './vuex/store';


const app = createApp(App)

app.use(store);
app.use(Quasar, quasarUserOptions);

app.mount('#app');

// #ECEBEB