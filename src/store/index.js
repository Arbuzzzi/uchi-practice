/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detail: {
      width: 50,
      height: 50,
      position: {
        top: 75,
        left: 75
      }
    },
    scene: {
      width: 200,
      height: 200,
    },
    speed: 5
  },
  mutations: {
    setDetailPosition(state, payload) {
      switch (payload){
        case 'top':
          state.detail.position.top = --state.detail.position.top
          break;
        case 'bottom':
          state.detail.position.top = ++state.detail.position.top
          break;
        case 'left':
          state.detail.position.left = --state.detail.position.left
          break;
        case 'right':
          state.detail.position.left = ++state.detail.position.left
          break;
        default:
          console.error('setDetailPosition Error: Please set the correct direction')
      }
    },
    setSpeed(state, payload) {
      state.speed = payload
    }
  },
  actions: {
    setDetailPosition({commit}, payload) {
      commit('setDetailPosition', payload)
    },
    setSpeed({commit}, payload) {
      commit('setSpeed', payload)
    }
  },
  getters: {
    getDetail: state => state.detail,
    getDetailPosition: state => state.detail.position,
    getScene: state => state.scene,
    getSpeed: state => state.speed,
  },
  modules: {
  }
})
