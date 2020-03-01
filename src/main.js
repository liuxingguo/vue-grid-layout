import Vue from 'vue'
import App from './App.vue'
import iView from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(iView)

new Vue({
  render: h => h(App)
}).$mount('#app')
