import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        router: router,
    }
})
export default store