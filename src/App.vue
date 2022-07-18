<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <HelloWorld :msg="$t('message.other')">
      <template #footer="{ count }">
        <p>I am {{ count }} foot</p>
      </template>
    </HelloWorld>
    <HelloI18n />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloI18n from "./components/HelloI18n.vue";
export default {
  components: {
    HelloWorld,
    HelloI18n
  },
  i18n: {
    messages: {
      ja: {
        'message.hello': 'Konnichiwa', // never reaches the child component
        'message.other': 'kampai'
      }
    }
  }
};
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