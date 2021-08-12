<template>
  <div>
    <div @click="isOpen = true" class="add-new-note__btn">Add New Note +</div>

    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div class="container_modal">
          <form @submit="onSubmit">
            <input
              name="name"
              v-model="newNote.name"
              id="name"
              placeholder="Name your note"
            />
            <input
              name="category"
              id="category"
              v-model="newNote.category"
              placeholder="Give it a category"
            />
            <textarea
              name="note"
              id="note"
              v-model="newNote.note"
              rows="20"
              class="input_note"
              placeholder="Write your note here"
            />
            <div class="row_new-note-form-buttons">
              <input value="Save" type="submit" />
              <div @click="isOpen = false">Cancel</div>
            </div>
          </form>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import API from "../utils/API";

export default defineComponent({
  name: "CreateNoteBtn",
  data() {
    return {
      isOpen: false,
      newNote: {
        fireID: "wRPCubuo6eZ4rRF3tQkEmBNg9S83",
        name: "",
        category: "",
        note: "",
      },
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log("add note");
      console.log(this.newNote);

      API.addNote({
        fireID: this.newNote.fireID,
        name: this.newNote.name,
        category: this.newNote.category,
        note: this.newNote.note,
      })
        .then(() => {
          this.$emit("add-note", this.newNote);
        })

        .catch((err) => console.error(err));

      this.isOpen = false;
      this.name = "";
      this.category = "";
      this.note = "";
    },
  },
});
</script>



<style scoped>
.add-new-note__btn {
  color: #ffffff;
  background-color: #e00045;
  border: 1px solid #e00045;
  border-radius: 5px;
  text-align: center;
  width: 75%;
  padding: 20px 0;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 1.5rem;
  -webkit-box-shadow: 4px 6px 0.5rem #c8c8c8;
  box-shadow: 4px 6px 0.5rem #c8c8c8;
}

.add-new-note__btn:hover {
  cursor: pointer;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #e00045;
  background-color: #ffffff;
}

.container_modal {
  min-width: 600px;
  padding: 40px;
  background: #ffffff;
  border-radius: 4px;
}

.container_modal input {
  width: 100%;
  margin-bottom: 10px;
  padding: 4px 6px;
  font-size: 1.25rem;
}
.container_modal .input_note {
  height: 100px;
  width: 100%;
  padding: 4px 6px;
  font-size: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

/* Modal Form */
.row_new-note-form-buttons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}
.row_new-note-form-buttons div,
.row_new-note-form-buttons input {
  transition: 0.5s;
  width: 200px;
  background-color: #e00045;
  border: 1px solid #e00045;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  padding: 12px 24px;
  border-radius: 5px;
  margin: 0;
}

.row_new-note-form-buttons div:hover,
.row_new-note-form-buttons input:hover {
  cursor: pointer;
  transition: 0.5s;
  background-color: #ffffff;
  color: #e00045;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>