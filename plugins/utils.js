import Vue from 'vue'

const Util = {
    install: (Vue) => {
        Vue.prototype.$isMobileDevice = () => {
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

            return mobile.test(navigator.userAgent);
        }

        const url = {
            main: '/main'
        }

        url.mobile = {}
        Object.keys(url).forEach( key => {
            url.mobile[key] = '/m' + url[key]
        })

        Vue.prototype.$urls = url
    }
}

Vue.use(Util)
