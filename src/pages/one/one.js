import Vue from 'vue'
import One from './one.vue'

Vue.config.productionTip= false

new Vue({
  el: '#one',
  render: h => h(One)
})