<template>
  <v-app>
    <v-navigation-drawer class="pink lighten-4 custom-box-shadow" v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app temporary>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact class="bordered-item">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <div>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--------------------------------- Nav bar ---------------------------- -->
    <v-app-bar class="teal accent-1 box-shadow custom-box-shadow" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="text-h3 white--text nav-text ">{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn @click="logout" icon rightDrawer>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- --------------------------------------------------------------------- -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/');
    }

  },

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [

        {
          icon: 'mdi-home',
          title: 'Mymeet',
          to: '/user/own-calendar'
        },
        {
          icon: 'mdi-calendar',
          title: 'All meet',
          to: '/user/view-all-meet'
        },
        {
          icon: 'mdi-calendar-plus',
          title: 'Create meet',
          to: '/user/create-fullcalendar'
        }

        //----- icon source:https://pictogrammers.github.io/@mdi/font/3.6.95/

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'admin otp'
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
<style>
.nav-text {

text-transform: uppercase;
font-family: verdana;
font-size: 7em;
font-weight: 500;
color: #020d11;
text-shadow: 1px 1px 1px #919191,
  1px 2px 1px #919191,
  1px 3px 1px #919191,
  1px 4px 1px #919191,
  1px 5px 1px #919191,
  1px 6px 1px #919191,




  1px 18px 6px rgba(114, 110, 110, 0.4),



}
.custom-box-shadow {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
</style>