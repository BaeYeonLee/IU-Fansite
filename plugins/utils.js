import Vue from 'vue'

const Util = {
    install: (Vue) => {
        Vue.prototype.$isMobileDevice = () => {
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

            return mobile.test(navigator.userAgent);
        }

        Vue.prototype.$urls = {
            main: '/main'
        }
    }
}

Vue.use(Util)
