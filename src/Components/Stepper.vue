<template>
  <div>
    <div class="bg-gray-light h-1"></div>
    
  <div class="flex">
    <div class="flex-1" v-for="s in steps" :key="s">
      <div v-if="step >= s"
           class="bg-blue-300 -mt-1 h-1"
           :class="{ 'w-1/2': step === s, 'w-full': step < s }"/>
      <div class="-mt-3 mx-auto rounded-full h-5 w-5 ml-5"
           :class="{ 'bg-blue-300': s <= step, 'bg-gray-300': step !== s }"/>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    steps: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
}
</script>