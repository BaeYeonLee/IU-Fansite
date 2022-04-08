import album from './album'
import filmography from './filmography'

export default (context, inject) => {
  const API = {
    async multiRequest(...request) {
      return await Promise.all([...request])
    },

    album,
    filmography,
  }

  inject('api', API)
}
