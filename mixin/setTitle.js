import { mapMutations } from 'vuex'

export default {
  created() {
    this.setTitle(this.$options.name)
  },
  destroyed() {
    this.setTitle('')
  },
  methods: {
    ...mapMutations({
      setTitle: 'title/setTitle' 
    }),
  },
}