export const mutations = {
    setAccessToken(state, token) {
      state.accessToken = token
    },
    setUserID(state, userID) {
      state.userID = userID
    },
    CLEAR_ADDITIONAL_DATA(state) {
      state.additionalData = {}; // เคลียร์ข้อมูลเพิ่มเติม
      state.accessToken = null; // เคลียร์ token
    },
    setUserdata(state,Udata){
      state.userdata = Udata
    }
  }
  
  export const actions = {
    async logout({ commit }) {
      await this.$auth.logout(); // ลบ token และข้อมูลผู้ใช้จาก auth module
      commit('CLEAR_ADDITIONAL_DATA'); // ลบข้อมูลเพิ่มเติม
    },
    login({ commit }, { token, userID }) {
      commit('setAccessToken', token)
      commit('setUserID', userID)
    },
    setUdata({commit},Udata){
      commit('setUserdata',Udata)
    }
  }