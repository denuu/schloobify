import { createStore, action } from 'easy-peasy'

export const store = createStore({
  activeSongs: [],
  activeSong: null,
  volume: 1.0,
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload // Transforms into immutable with easy-peasy, no need for get/set
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload
  }),
  changeVolume: action((state: any, payload) => {
    state.volume = payload
  }),
})