<template>
  <app-layout-default id="final">
    <img src="@/Assets/check.png" class="mx-auto" style="width:20%;">
    <p class="text-center text-green-500 font-bold text-2xl mt-5">نتيجة الفحص</p>
    <p class="text-center text-gray-500 font-bold ">يتم تجهيز نتيجتك اعتماداً على البيانات المقدمة</p>
    <p class="text-center text-gray-500 font-bold text-xl mt-10">زودنا برقم الجوال لإرسال النتيجة</p>
    <input v-model="mobile" type="tel" name="mobile" id="mobile" class="leading-none w-full p-3 text-xl rounded-lg focus:outline-none focus:shadow-outline mt-4 text-center" dir="ltr" placeholder="رقم الجوال">
    <div class="text-center w-full">
      <button :disabled="loading" @click="submit" class="btn-send">
        إرسال
        <fai v-if="loading" icon="spinner" spin class="mr-2"/>
      </button>
    </div>
  </app-layout-default>
</template>

<script>
import axios from 'axios';
import AppLayoutDefault from '@/Layouts/Default/Index.vue';

export default {
  name: 'Final',
  components: {
    AppLayoutDefault,
  },
  mounted () {
    if (this.$store.getters['invalidUrl']) {
      this.$router.push({ name: 'personal-information' })
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    mobile: {
      get () {
        return this.$store.state.request.mobile
      },
      set (mobile) {
        return this.$store.commit('UPDATE_USERINFO', { mobile })
      },
    },
  },
  methods: {
    submit () {
      if (!this.mobile) {
        this.$snotify.error('من فضلك ادخل رقم الجوال أولاً');
        return
      }
      this.loading = true
      axios.post('http://api.nahdi.appzy.info/api/players', this.$store.state.request)
      .then(() => {
        this.loading = false
        this.$router.push({ name: 'thanks' })
      })
      .catch(error => {
        this.loading = false
        if (error.response.status === 422) {
          this.$snotify.error('من فضلك استكمل البيانات أولاً');
        }
        console.log(error.response)
      })
    }
  }
}
</script>