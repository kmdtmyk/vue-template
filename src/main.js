import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components'
import filters from './filters'

for(const name in components){
  Vue.component(name, components[name])
}

for(const name in filters){
  Vue.filter(name, filters[name])
}

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
