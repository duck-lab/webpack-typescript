{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App.vue'{{#element}}
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'{{/element}}
{{#router}}
import router from './router'
{{/router}}

{{#element}}
Vue.use(ElementUI)
{{/element}}

Vue.config.productionTip = false
{{#lint}}
/* tslint:disable:no-unused-expression */
{{/lint}}
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  template: '<App/>',
  components: { App }
})
{{#lint}}
/* tslint:enable:no-unused-expression */
{{/lint}}
