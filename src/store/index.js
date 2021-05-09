import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      msalConfig: {
        auth: {
          clientId: 'c818cd5b-19cb-4c7c-8ac9-c616bfa27a0d',
          authority:
            'https://login.microsoftonline.com/2f498ca6-4e80-430b-9810-189d8a5e6f4c',
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      },
      accessToken:""
    };
  },
  mutations :{
    setAccessToken(state, token){
      state.accessToken = token;
    }
  }
});

export default store;
