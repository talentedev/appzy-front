<script>
export default {
  name: 'ModelBinding',
  props: {
    value: {
      required: true
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  computed: {
    model: {
      get () {
        return this.value;
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>