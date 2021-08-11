<template>
  <div>
    <FilterableData
      :notes="notes"
      :handleSortTypeValueChange="handleSortTypeValueChange"
      :sortTypeOrderValue="sortTypeOrderValue"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import API from "../utils/API";
import Sorter from "../utils/sorting";

import FilterableData from "../components/main/FilterableData.vue";

export default defineComponent({
  name: "Main",
  props: ["notesProp"],
  components: {
    FilterableData,
  },
  data() {
    return {
      notes: [],
      sortTypeValue: undefined,
      sortAscending: false,
      sortTypeOrderValue: undefined,
    };
  },
  methods: {
    handleSortTypeValueChange(input) {
      if (this.sortTypeValue !== input) {
        this.sortAscending = true;
      } else {
        if (this.sortAscending === false) {
          this.sortAscending = true;
        } else {
          this.sortAscending = false;
        }
      }
      this.sortTypeValue = input;
      this.sortNotes();
    },
    sortNotes() {
      if (this.sortTypeValue === "name" && this.sortAscending === true) {
        let sortedNotes = Sorter.aToZName(this.notes);
        this.notes = sortedNotes;
      } else if (
        this.sortTypeValue === "name" &&
        this.sortAscending === false
      ) {
        let sortedNotes = Sorter.zToAName(this.notes);
        this.notes = sortedNotes;
      } else if (
        this.sortTypeValue === "category" &&
        this.sortAscending === true
      ) {
        let sortedNotes = Sorter.aToZCategory(this.notes);
        this.notes = sortedNotes;
      } else if (
        this.sortTypeValue === "category" &&
        this.sortAscending === false
      ) {
        let sortedNotes = Sorter.zToACategory(this.notes);
        this.notes = sortedNotes;
      } else if (
        this.sortTypeValue === "date" &&
        this.sortAscending === false
      ) {
        let sortedNotes = Sorter.aToZUpDate(this.notes);
        this.notes = sortedNotes;
      } else {
        let sortedNotes = Sorter.zToAUpDate(this.notes);
        this.notes = sortedNotes;
      }
    },
  },
  async created() {
    try {
      API.getNotes()
        .then((res) => {
          this.notes = res.data;
        })
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }
  },
});
</script>
