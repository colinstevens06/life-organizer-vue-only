<template>
  <div className="container_notes-list">
    <div className="header_notes-list">Your Notes</div>

    <div className="row_notes-list sortable-headers__border">
      <div
        class="header__sortable-lists"
        @click="handleSortTypeValueChange('name')"
      >
        Name
      </div>
      <div
        class="header__sortable-lists"
        @click="handleSortTypeValueChange('date')"
      >
        Last Modified
      </div>
      <div
        class="header__sortable-lists"
        @click="handleSortTypeValueChange('category')"
      >
        Category
      </div>
    </div>

    <!-- place data here and map through it -->
    <div v-for="note in notes" :key="note._id">
      <DataRow
        :id="note._id"
        :name="note.name"
        :category="note.category"
        :date="note.lastUpdated.slice(0, 10)"
      />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

import DataRow from "./DataRow.vue";

export default defineComponent({
  props: {
    notes: Array,
    handleSortTypeValueChange: Function,
  },
  components: {
    DataRow,
  },
});
</script>

<style scoped>
.container_notes-list {
  width: 75%;
  margin: 25px auto;
  padding: 20px 0;
}

.header_notes-list {
  font-size: 1.75rem;
  font-weight: 800;
  padding-left: 15px;
}

.row_notes-list {
  display: grid;
  grid-template-columns: 50% 25% 25%;
  gap: 10px;
  color: inherit;
}

.sortable-headers__border {
  margin-top: 15px;
  border-top: 1px solid #b9b9b9;
  border-bottom: 1px solid #b9b9b9;
  margin-bottom: 20px;
}

.header__sortable-lists {
  font-size: 1.5rem;
  color: #474747;
  padding: 8px 0;
  padding-left: 15px;
  transition: 0.5s;
}

.header__sortable-lists:hover {
  cursor: pointer;
  transition: 0.5s;
  background-color: #ffb5c1;
}
</style>
