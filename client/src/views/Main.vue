<template>
  <div>
    <h1>Building This</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import API from "../utils/API";

export default defineComponent({
  name: "Main",
  data() {
    return {
      notes: [],
    };
  },
  // methods: {
  //   async fetchNotes() {
  //     const newNotes = await API.getNotes();
  //     return newNotes;
  //   },
  // },
  async created() {
    try {
      console.log("trying to get API");
      API.getNotes()
        .then((res) => {
          console.log(res.data);
          // this.notes = res.data;
        })
        .catch((err) => console.error(err));
      // console.log(this.notes);
    } catch (err) {
      console.log(err);
    }
  },
});
</script>
