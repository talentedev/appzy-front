<template>
    <div class="flex flex-col w-full min-h-screen">
      <!-- nav -->
      <nav class="fixed flex-wrap w-full pin items-center justify-between flex-wrap bg-gray-100 p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <img src="@/Assets/logo.png">
          <router-link v-if="redo" :to="{ name: 'home' }" class="mr-auto">
            <img src="@/Assets/redo.png" width="36px">
          </router-link>
        </div>
      </nav>

      <!-- content -->
      <main class="px-4 pt-32 flex-1">
        <div class="container mx-auto">
          <slot/>
        </div>
      </main>

      <!-- footer -->
      <footer v-if="$slots.footer" class=" justify-between pin-b relative px-8 py-4 bg-gray-100 shadow">
        <slot name="footer"/>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  props: {
    redo: {
      type: Boolean,
      required: false,
      default: false,
    },
  }
}
</script>