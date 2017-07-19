import * as types from './mutation-type'

export default {
  [types.USE_LOGIN] (state, usemsg) {
    state.login = true
    state.use = usemsg
  },
  [types.USE_OUT] (state) {
    state.login = false
    state.use = null
  }
}
