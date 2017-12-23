import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    demoData: []
}

// 定义所需的 mutations
const mutations = {
    UPDATE_DEMO_DATA(state, data){
        state.demoData = data
    }}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})