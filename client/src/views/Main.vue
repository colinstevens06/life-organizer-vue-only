<template>
  <div>
    <FilterableData :notes="notes" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import API from "../utils/API";

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
    };
  },

  async created() {
    try {
      console.log("trying to get API");
      API.getNotes()
        .then((res) => {
          console.log(res.data);
          this.notes = res.data;
        })
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }
  },
});
</script>
