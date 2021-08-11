<template>
  <div>
    <form>
      <div class="container__update-buttons">
        <div @click.prevent="updateNoteObject">Save</div>
        <div @click="deleteNote">Delete</div>
        <router-link to="/">Cancel</router-link>
      </div>
      <hr />
      <input
        :value="updatedNote.name"
        @keyup="handleInputChange"
        class="header__single-note"
        name="name"
      />
      <input
        :value="updatedNote.category"
        @keyup="handleInputChange"
        class="subheader__single-note"
        name="category"
      />
      <hr />

      <textarea
        :value="updatedNote.note"
        @keyup="handleInputChange"
        class="text__single-note form_update-note"
        name="note"
      />
    </form>
  </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";

import API from "../../utils/API";

export default defineComponent({
  props: ["activeNote"],
  data() {
    return {
      updatedNote: {},
    };
  },
  watch: {
    activeNote: function () {
      this.updatedNote = this.activeNote;
    },
  },
  methods: {
    handleInputChange: function (event) {
      const { name, value } = event.target;
      this.updatedNote = { ...this.updatedNote, [name]: value };
    },
    updateNoteObject: function () {
      API.updateNote(this.updatedNote._id, this.updatedNote);
    },
  },
  async created() {
    try {
      this.updatedNote = this.activeNote;
    } catch (error) {
      console.error(error);
    }
  },
});
</script>


<style scoped>
.container__update-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 15px;
  padding-left: 15px;
}
.container__update-buttons div {
  position: relative;
  padding: 6px 8px;
  width: 100px;
  text-align: center;
  transition: 0.5s;
  overflow: hidden;
}
.container__update-buttons div:hover {
  cursor: pointer;
  transition: 0.5s;
  background-color: #ffb5c1;
}
.container__update-buttons div:after {
  content: "";
  background-color: #e00045;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}

.container__update-buttons:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}

.container__update-buttons:active {
  transform: translateY(3px);
}

.container__update-buttons a {
  color: inherit;
  padding: 6px 8px;
  width: 100px;
  text-align: center;
  transition: 0.5s;
}
.container__update-buttons a:hover {
  cursor: pointer;
  color: inherit;
  transition: 0.5s;
  background-color: #ffb5c1;
}

.header__single-note {
  font-size: 2rem;
  color: #474747;
  padding-left: 15px;
  border-color: transparent;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  width: 100%;
}

.header__single-note:hover {
  border-color: #b9b9b9;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.subheader__single-note {
  font-size: 1.5rem;
  color: #474747;
  padding: 15px;
  border-bottom: 1px solid #474747;
  border-color: transparent;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  width: 100%;
}

.subheader__single-note:hover {
  border-color: #b9b9b9;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.text__single-note {
  font-size: 1.25rem;
  padding: 12px 15px;
  /* font-family: $primaryFontFamily; */
  height: 450px;
  border-color: transparent;
  transition: 0.5s;
}
.text__single-note:hover {
  border-color: #b9b9b9;
  transition: 0.5s;
}

.form_update-note {
  width: 100%;
  margin-right: 15px;
}
</style>