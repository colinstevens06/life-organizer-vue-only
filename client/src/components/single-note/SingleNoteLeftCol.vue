<template>
  <div>
    <div
      v-for="note in notes"
      :key="note._id"
      class="container__single-note-left-col"
    >
      <SingleNoteLeftColItem :id="note._id" :name="note.name" />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

import SingleNoteLeftColItem from "./SingleNoteLeftColItem.vue";

export default defineComponent({
  props: ["notes"],
  components: { SingleNoteLeftColItem },
});
</script>


<style scoped>
.container__single-note-left-col {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dcdcdc;
  margin-right: 10px;
}
</style>