<template>
  <div>
    <CreateNoteBtn @add-note="addNote" />
    <div class="container_single-note-main-window container_notes-list">
      <SingleNoteLeftCol :notes="notes" />
      <SingleNoteMainView
        :activeNote="activeNote[0]"
        @updateNote="updateAllNotes"
      />
    </div>
    <!-- <h1>Single Note</h1>
    <p>{{ activeNote[0].name }}</p> -->
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

import SingleNoteLeftCol from "../components/single-note/SingleNoteLeftCol.vue";
import SingleNoteMainView from "../components/single-note/SingleNoteMainView.vue";
import CreateNoteBtn from "../components/CreateNoteBtn.vue";

import API from "../utils/API";

export default defineComponent({
  data() {
    return {
      notes: [],
      activeNote: [],
    };
  },
  components: {
    SingleNoteLeftCol,
    SingleNoteMainView,
    CreateNoteBtn,
  },
  methods: {
    setActiveNote() {
      let thisNote = this.notes.filter(
        (note) => note._id === this.$route.params.id
      );
      this.activeNote = thisNote;
    },
    updateAllNotes(input) {
      let noteToUpdate = input._id;
      let noteToUpdateIndex = this.notes.findIndex(
        (obj) => obj._id === noteToUpdate
      );
      this.notes[noteToUpdateIndex] = input;
    },
    addNote() {
      API.getNotes().then((res) => {
        console.log("res.data", res.data);
        this.notes = res.data;
      });
    },
  },
  watch: {
    "$route.params.id": function () {
      this.setActiveNote();
    },
  },
  async created() {
    try {
      API.getNotes()
        .then((res) => {
          this.notes = res.data;
          this.setActiveNote();
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  },
});
</script>


<style scoped>
.container_single-note-main-window {
  display: grid;
  grid-template-columns: 200px auto;
}

.container_notes-list {
  width: 75%;
  margin: 25px auto;
  padding: 20px 0;
}
</style>