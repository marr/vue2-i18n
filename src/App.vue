<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <HelloWorld :msg="$t('message.cheers')" />
    <HelloWorld :msg="$t('message.hello')" />
    <HelloI18n @change="changeLocale" />
    {{ this.$i18n.locale }}
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloI18n from "./components/HelloI18n.vue";
import { useI18n } from "vue-i18n-bridge";
export default {
  components: {
    HelloWorld,
    HelloI18n
  },

  methods: {
    changeLocale: function () {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ja' : 'en'
    }
  },

  setup() {
    useI18n({
      messages: {
        ja: {
          message: {
            cheers: '乾杯'
          }
        }
      },
      useScope: 'global'
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>