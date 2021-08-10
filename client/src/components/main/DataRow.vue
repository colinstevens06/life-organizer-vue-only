<template>
  <div class="row_notes-list notes-list-results">
    <div>{{ name }}</div>
    <div>{{ date }}</div>
    <div className="result_category">{{ category }}</div>
  </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: String,
    name: String,
    category: String,
    date: String,
  },
});
</script>


<style scoped>
.row_notes-list {
  display: grid;
  grid-template-columns: 50% 25% 25%;
  gap: 10px;
  color: inherit;
}
.row_notes-list:hover {
  color: inherit;
}

.notes-list-results {
  font-size: 1.25rem;
  line-height: 2.5rem;
  border-bottom: 1px solid #b9b9b9;
  transition: 0.5s;
}
.notes-list-results:hover {
  cursor: pointer;
  background-color: #ffb5c1;
  transition: 0.5s;
}
.notes-list-results div {
  padding-left: 15px;
}
.notes-list-results .result_category {
  text-transform: capitalize;
}
</style>
