import { createStore, action } from 'easy-peasy'

export const store = createStore({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload // Transforms into immutable with easy-peasy, no need for get/set
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload
  }),
})