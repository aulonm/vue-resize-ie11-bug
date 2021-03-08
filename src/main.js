import Vue from 'vue'
import App from './App.vue'
import VueResize from 'vue-resize';

Vue.config.productionTip = false

Vue.use(VueResize);

new Vue({
  render: h => h(App),
}).$mount('#app')
