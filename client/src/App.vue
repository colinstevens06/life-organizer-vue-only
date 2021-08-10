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
}
</style>
