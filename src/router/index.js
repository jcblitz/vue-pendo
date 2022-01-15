import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ImpactableFeatureA from '@/components/ImpactableFeatureA'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/feature-a',
      name: 'ImpactableFeatureA',
      component: ImpactableFeatureA
    }
  ]
})
