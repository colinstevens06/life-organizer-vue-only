<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  setup() {},
  components: {
    NavBar,
  },
});
</script>



<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
</style>
