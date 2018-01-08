export const state = () => ({
  counter: 0,
  title: '老左',
  index: false,
  channels: false,
  detail: false,
  statichost:'http://1.tthunbohui.cn'
})

export const mutations = {
    increment (state) {
      state.counter++
    },
    changeHeaderTitle (state, title) {
      state.title = title
    },
    indexHeader (state, index) {
        state.index = index
    },
    channelsHeader (state, channels) {
        state.channels = channels
    },
    detailHeader (state, detail) {
      state.detail = detail
    }
}