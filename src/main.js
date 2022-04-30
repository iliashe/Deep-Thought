//import '@babel/polyfill';
//import 'mutationobserver-shim';
import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import { Quasar } from 'quasar';
import Options from './quasar-options';
import store from './vuex/store';


const app = createApp(App)

app.use(store);
app.use(Quasar, Options);

app.mount('#app');

// #ECEBEB