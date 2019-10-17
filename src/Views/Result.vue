<template>
  <app-layout-default id="result">
    <template v-if="player === null">
      <div class="text-center">
        <fai icon="spinner" class="fa-2x mx-auto text-gray-500" spin />
      </div>
    </template>
    <template v-else>
      <p class="text-center text-green-500 font-nahdi-bold text-2xl">
        نتيجة الفحص
      </p>
      <div class="flex -mx-2 my-2">
        <div class="w-1/2 px-2">
          <div class="text-center bg-white rounded shadow p-4 font-nahdi-bold text-gray-500">
            النظام الغذائي
            <div class="w-full mt-2 relative">
              <doughnut-chart :chart-data="diet.chart" :options="options" :style="styles"></doughnut-chart>
              <div style="position: absolute; top: 50%; left: 50%; width: 109px; height: 109px; padding: 36px; font-size: 1.5rem; color: #999; transform: translateY(-50%) translateX(-50%); border: 1px #eee solid; border-radius: 50%;">
                {{ diet.percentage }}%
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2 px-2">
          
          <div class="text-center bg-white rounded shadow p-4 font-nahdi-bold text-gray-500">
            أسلوب حياتك
            <div class="w-full mt-2 relative">
              <doughnut-chart :chart-data="lifeStyle.chart" :options="options" :style="styles"></doughnut-chart>
              <div style="position: absolute; top: 50%; left: 50%; width: 109px; height: 109px; padding: 36px; font-size: 1.5rem; color: #999; transform: translateY(-50%) translateX(-50%); border: 1px #eee solid; border-radius: 50%;">
                {{ lifeStyle.percentage }}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full bg-white rounded shadow p-4 font-nahdi-bold text-gray-500 mt-4 flex">
        <div class="pl-2 w-1/3">
          <img src="@/Assets/tips.png" class="w-24 top-0 rounded">
        </div>
        <div class="w-2/3">
          <p class="text-green-500 font-nahdi-bold text-2xl">
            نصيحتنا لك
          </p>
          <p>
            {{ tips }}
          </p>
        </div>
      </div>

      <template v-if="products.length !== 0">
        <p class="text-green-500 font-nahdi-bold text-2xl text-center mt-6">
          المنتجات التي تحتاجها بيومك
        </p>
        <div v-for="(product, productIndex) in products" :key="`product-${productIndex}`" class="w-full bg-white rounded shadow p-4 font-nahdi-bold text-gray-500 mt-2 flex">
          <div class="w-1/3 pl-2">
            <img :src="product.icon" class="w-24 top-0 rounded">
          </div>
          <div class="w-2/3">
            <p class="text-green-500 font-nahdi-bold text-xl">
              {{ product.name }}
            </p>
            <p>
              {{ product.description }}
            </p>
            <div class="w-full text-left mt-4 mb-3 text-sm">
              <a class="bg-teal-600 text-white rounded p-2" :href="product.link" target="_blank">
                اطلبها الآن
              </a>
            </div>
          </div>
        </div>
        <template v-if="loadingProducts">
          <div class="text-center mt-6">
            <fai icon="spinner" class="fa-2x mx-auto text-gray-500" spin />
          </div>
        </template>
      </template>
    </template>
  </app-layout-default>
</template>

<script>
import axios from 'axios';
import AppLayoutDefault from '@/Layouts/Default/Index.vue';
import DoughnutChart from './DoughnutChart'
import Tips from '@/Data/Tips.json'

export default {
  name: 'Result',
  components: {
    AppLayoutDefault,
    DoughnutChart
  },
  mounted () {
    document.querySelector('main').addEventListener('scroll', this.scroll)
  },
  destroyed() {
    document.querySelector('main').removeEventListener('scroll', this.scroll)
  },
  data () {
    return {
      player: null,
      products: [],
      page: 2,
      loadingProducts: false,
      lastPage: null,
      loadMore: false
    }
  },
  computed: {
    tips () {
      const diet = this.diet.percentage
      const lifeStyle = this.lifeStyle.percentage

      let tipIndex = null

      if (diet === 100 && lifeStyle === 100) {
        tipIndex = 0
      } else if (diet === 0 && lifeStyle === 0) {
        tipIndex = 1
      } else if (diet === 100 && lifeStyle === 0) {
        tipIndex = 2
      } else if (diet === 0 && lifeStyle === 100) {
        tipIndex = 3
      } else {
        tipIndex = 4
      }

      return Tips[tipIndex]
    },
    uuid () {
      return this.$route.params.uuid;
    },
    diet () {
      const percentage = (this.player && this.player.Quiz && this.player.Quiz.Diet && this.player.Quiz.Diet.result)
        ? (this.player.Quiz.Diet.result * 100)
        : 0
      return {
        chart: {
          datasets: [{
            borderWidth: 0,
            borderColor: '#000',
            data: [ percentage, 1 - percentage ],
            backgroundColor: [ 'darkred', '#fff' ]
          }],
          labels: [ 'dd' ],
        },
        percentage,
      }
    },
    lifeStyle () {
      const percentage = (this.player && this.player.Quiz && this.player.Quiz.LifeStyle && this.player.Quiz.LifeStyle.result)
        ? (this.player.Quiz.LifeStyle.result * 100)
        : 0
      return {
        chart: {
          datasets: [{
            borderWidth: 0,
            borderColor: '#000',
            data: [ percentage, 1 - percentage ],
            backgroundColor: [ 'indigo', '#fff' ]
          }],
          labels: [ 'dd' ],
        },
        percentage,
      }
    },
    styles () {
      return {}
    },
    options () {
      return {
        events: [],
     legend: {
       display: false,
     },
     title: {
       display: false,
     },
     cutoutPercentage: 80,
        elements: {
            center: {
                text: '50%'  //set as you wish
            }
        },
      }
    }
  },
  watch: {
    uuid: {
      handler () {
        this.player = null
        axios.get(`http://api.nahdi.appzy.info/api/players/${this.uuid}`)
          .then(response => {
            axios.get(`http://api.nahdi.appzy.info/api/players/${this.uuid}/products`)
              .then(res => {
                this.player = response.data
                this.products = res.data.data
                this.lastPage = res.data.meta.last_page
              })
          })
          .catch(error => {
            console.log(error.response)
          })
      },
      immediate: true
    }
  },
  methods: {
    scroll () {
      const main = document.querySelector('main')
      let bottomOfWindow = Math.round(main.scrollTop + main.offsetHeight) >= main.scrollHeight
      console.log(main.scrollTop + main.offsetHeight, main.scrollHeight)

      if (this.loadMore && bottomOfWindow && this.page <= this.lastPage && !this.loadingProducts) {
        this.loadingProducts = true
        axios.get(`http://api.nahdi.appzy.info/api/players/${this.uuid}/products?page=${this.page}`)
          .then(response => {
            this.loadingProducts = false
            this.products.push(...response.data.data)
            this.page++
            this.lastPage = response.data.meta.last_page
          })
      }
    }
  }
}
</script>