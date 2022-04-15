import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      intervalId: ''
    }
  },
  created() {
    const componentName = this.$options.name

    if( componentName === '' ) {
      if( this.intervalId ) clearInterval(this.intervalId)
    } else {
      const charList = componentName.split('')

      let index = 0;
      this.intervalId = setInterval( () =>{
        if( index !== charList.length ) {
          this.addTitle(charList[index])
          index++
        } else {
          clearInterval(this.intervalId)
        }
      }, 100)
    }
  },
  destroyed() {
    this.setTitle('')
  },
  methods: {
    ...mapMutations({
      setTitle: 'title/setTitle',
      addTitle: 'title/addTitle',
    }),
  },
}