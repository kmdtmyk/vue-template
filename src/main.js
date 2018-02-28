import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components'

for(const name in components){
  Vue.component(name, components[name])
}

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
