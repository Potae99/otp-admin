export default function({ $axios, store }) {
    $axios.onRequest(config => {
      const token = store.state.auth.accessToken;
      if (token) {
        config.headers.common['x-access-token'] = token;
      }
      return config;
    });
  }
  