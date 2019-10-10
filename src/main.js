import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import 'iview/dist/styles/iview.css';
import store from './store/index';
import router from './router'
// The `getField()` and `updateField()`
// helper functions, are needed to update
// the mapped fields in a Vuex conform manner.

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
