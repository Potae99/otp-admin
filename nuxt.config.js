import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - otp-admin',
    title: 'otp-admin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Screenshot_2024-05-03_162240-removebg-preview.ico' }
    ]
  },

  css: [
  ],

  // server: {
  //   host: '192.168.1.160',
  //   // host: 'localhost',
  //   port: 3000
  // },

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  plugins: [
    '~/plugins/axios'
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          global: true,
          name: 'Authorization',
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/Jmeet/signin', method: 'post', propertyName: ['accessToken','UserID'] },
          logout: false,
          user: false,
        }
      }
    },
    redirect: {
      login: '/', 
    }
  },

  axios: {
    baseURL: process.env.MY_URL_ENDPOINT,
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  }
}