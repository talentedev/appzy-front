import Vue from 'vue';
import Router from 'vue-router';
import Home from './Views/Home.vue';
import PersonalInformation from './Views/PersonalInformation.vue';
import Questions from './Views/Questions.vue';
import Thanks from './Views/Thanks.vue';
import Final from './Views/Final.vue';
import Result from './Views/Result.vue';

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/personal-information',
      name: 'personal-information',
      component: PersonalInformation
    },
    {
      path: '/questions/:index',
      name: 'questions',
      component: Questions
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    },
    {
      path: '/final',
      name: 'final',
      component: Final
    },
    {
      path: '/result/:uuid',
      name: 'result',
      component: Result
    },
  ],
})
