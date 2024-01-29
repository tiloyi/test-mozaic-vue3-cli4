<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <MButton label="Ceci est un bouton Mozaic!" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import MButton from "@mozaic-ds/vue-3/src/components/button/MButton.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MButton,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
