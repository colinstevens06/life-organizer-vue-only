<template>
  <div>
    <CreateNoteBtn @add-note="addNote" />

    <FilterableData
      :notes="notes"
      :handleSortTypeValueChange="handleSortTypeValueChange"
      :sortTypeOrderValue="sortTypeOrderValue"
      :key="componentKey"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import API from "../utils/API";
import Sorter from "../utils/sorting";

import FilterableData from "../components/main/FilterableData.vue";
import CreateNoteBtn from "../components/CreateNoteBtn.vue";

export default defineComponent({
  name: "Main",
  props: ["notesProp"],
  components: {
    FilterableData,
    CreateNoteBtn,
  },
  data() {
    return {
      notes: [],
      sortTypeValue: undefined,
      sortAscending: false,
      sortTypeOrderValue: undefined,
      componentKey: 0,
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
    addNote() {
      console.log("add note on main.vue");
      API.getNotes().then((res) => {
        this.notes = res.data;
      });
    },
  },
  watch: {
    "this.notes": function () {
      this.componentKey = this.componentKey++;
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
