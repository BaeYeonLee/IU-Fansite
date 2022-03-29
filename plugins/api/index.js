import album from './album'

export default (context, inject) => {
  const API = {
    async multiRequest(...request) {
      return await Promise.all([...request])
    },
  
    album,
  }

  inject('api', API)
}