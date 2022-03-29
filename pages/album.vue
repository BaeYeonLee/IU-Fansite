<template>
  <div style="color: white">
    ALBUM
  </div>
</template>

// TODO :: CREATE MAIN PAGE
<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'MainLayout',
  created() {
    // this.getAlbumList()

    this.setTitle('ALBUM')
  },
  methods: {
    ...mapMutations({
      setTitle: 'title/setTitle' 
    }),
    async getAlbumList() {
      const tempList = await this.$api.album.getList()

      // 앨범 나온 날짜 순으로 정렬
      tempList.sort( (a,b) => {
        if( a.release_date < b.release_date ) {
          return 1
        }

        if( a.release_date > b.release_date ) {
          return -1
        }

        return 0
      })

      console.log('tempList', tempList)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>