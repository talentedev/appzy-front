<template>
  <div class="w-full" :style="pageStyle">
    <header class="w-full absolute top-8 bg-gray-100 p-3 shadow-lg z-50" ref="header">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <img src="@/Assets/logo.png">
        <router-link v-if="redo" :to="{ name: 'home' }" class="mr-auto">
          <img src="@/Assets/redo.png" width="36px">
        </router-link>
      </div>
    </header>
    <main class="bg-theme mx-auto p-8 absolute overflow-y-auto w-screen" :style="mainStyle">
      <div class="container mx-auto">
        <slot/>
      </div>
      <vue-snotify></vue-snotify>
    </main>
    <footer v-if="$slots.footer" class="w-full pin-b bg-gray-100 shadow absolute bottom-0 px-8 py-4 shadow z-50" ref="footer">
      <slot name="footer"/>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  mounted () {
    window.addEventListener('resize', this.resizeHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  props: {
    redo: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data () {
    return {
      windowHeight: window.innerHeight,
      headerHeight: 65,
    };
  },
  computed: {
    footerHeight () {
      return this.$slots.footer
        ? 68
        : 0
    },
    pageStyle () {
      return {
        'min-height': this.windowHeight
      }
    },
    mainStyle () {
      const height = this.windowHeight - this.headerHeight - this.footerHeight

      return {
        height: `${height}px`,
        top: `${this.headerHeight}px`,
      }
    }
  },
  methods: {
    resizeHandler () {
      this.windowHeight = window.innerHeight
    }
  }
}
</script>