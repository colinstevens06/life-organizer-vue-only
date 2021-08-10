<template>
  <router-link :to="'/notes/' + id" class="row__left-column-list">{{
    name
  }}</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["name", "id"],
});
</script>


<style scoped>
.row__left-column-list {
  color: inherit;
  width: 100%;
  padding: 6px 0px;
  padding-left: 6px;
  font-size: 0.8rem;
  transition: 0.5s;
  border-bottom: 1px solid #dcdcdc;
}
.row__left-column-list:hover {
  cursor: pointer;
  color: inherit;
  transition: 0.5s;
  background-color: #ffb5c1;
}
</style>