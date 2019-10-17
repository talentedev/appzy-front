<template>
  <app-layout-default id="personal-information">
    <div class="question">
      <div class="question-header">
        <span class="question-number">1</span>
        <span class="question-title">نبدأ و نتعرف عليك</span>
        <span class="question-subtitle">معلوماتك الصحيحة تساعدنا في فهم احتياجاتك</span>
      </div>
      <div class="card-body p-3 mt-3">
        <label for="name" class="block text-right font-bold mb-2 text-gray-600">الإسم بالكامل</label>
        <input v-model="name" type="text" name="name" id="name" class="form-input mt-1 block w-full text-lg font-bold text-gray-700">
        
        <div class="flex mt-3">
          <div class="w-1/2 pl-2">
            <label for="age" class="block text-right font-bold mb-2 text-gray-600">العمر</label>
            <input v-model="age" type="number" name="age" id="age" class="form-input mt-1 block w-full text-lg font-bold text-gray-700" min="0" max="150">
          </div>
          <div class="w-1/2 pr-2">
            <label for="city" class="block text-right font-bold mb-2 text-gray-600">المدينة</label>
            <input v-model="city" type="text" name="city" id="city" class="form-input mt-1 block w-full text-lg font-bold text-gray-700" min="0" max="150">
          </div>
        </div>

        <div class="block text-center font-bold mb-2 text-gray-600 mt-3">إيش تحب نناديك</div>

        <app-form-radio-inline :options="genderOptions" v-model="gender"/>
      </div>
    </div>

    <template v-slot:footer>
      <div class="flex justify-between">
        <div class="text-gray-500 text-right text-sm py-2" style="font-size: 8pt">تأكد من صحة المعلومات التي اخترتها</div>
        <router-link :to="{ name: 'questions', params: { index: 1 } }" class="btn-next">الخطوة التالية</router-link>
      </div>
    </template>
  </app-layout-default>
</template>

<script>
import AppLayoutDefault from '@/Layouts/Default/Index.vue';

import AppFormRadioInline from '@/Components/Form/RadioInline'

export default {
  name: 'PersonalInformation',
  components: {
    AppLayoutDefault,
    AppFormRadioInline,
  },
  data () {
    return {
      genderOptions: [
        {
          label: 'أستاذ',
          value: 'male',
          image: {
            active: require('@/Assets/male-white.png'),
            inactive: require('@/Assets/male-gray.png'),
          }
        },
        {
          label: 'أستاذة',
          value: 'female',
          image: {
            active: require('@/Assets/female-white.png'),
            inactive: require('@/Assets/female-gray.png'),
          }
        },
      ]
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.state.request.name
      },
      set (name) {
        return this.$store.commit('UPDATE_USERINFO', { name })
      },
    },
    age: {
      get () {
        return this.$store.state.request.age
      },
      set (age) {
        return this.$store.commit('UPDATE_USERINFO', { age })
      },
    },
    city: {
      get () {
        return this.$store.state.request.city
      },
      set (city) {
        return this.$store.commit('UPDATE_USERINFO', { city })
      },
    },
    gender: {
      get () {
        return this.$store.state.request.gender
      },
      set (gender) {
        return this.$store.commit('UPDATE_USERINFO', { gender })
      },
    },
  }
}
</script>