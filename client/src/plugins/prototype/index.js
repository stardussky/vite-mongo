import axios from './axios'

export default function (Vue) {
    Vue.config.globalProperties.$axios = axios
}
