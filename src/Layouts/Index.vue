<template>
  <component :is="component">
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'AppLayout',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    component () {
      const name = this.name;

      return () => import(`./${name}/Index.vue`)
    }
  }
}
</script>