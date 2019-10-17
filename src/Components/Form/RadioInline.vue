<template>
  <div class="flex -mx-1">
    <div v-for="(option, optionIndex) in options" :key="`option-${optionIndex}`"
         :class="[`w-1/${options.length}`, className(option), hoverClass]"
         class="border rounded-lg mx-1 p-3 font-bold text-center"
         @click="model = option.value">
      <img :src="option.value === model ? option.image.active : option.image.inactive" class="mx-auto mb-2">
      {{ option.label }}
    </div>
  </div>
</template>

<script>
import ModelBindingVue from '@/Mixins/ModelBinding.vue';

export default {
  name: 'FormRadioInline',
  mixins: [ ModelBindingVue ],
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      hoverClass: 'hover:bg-teal-500 hover:text-white',
      activeClass: 'bg-teal-500 text-white',
      inactiveClass: 'bg-white text-gray-600',
    }
  },
  methods: {
    className (option) {
      return (option.label === this.model)
        ? this.activeClass
        : this.inactiveClass;
    }
  }
}
</script>