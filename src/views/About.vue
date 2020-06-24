<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ foo }}</h2>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({ foo: state => state.foo })
  },
  created() {
    this.$store.dispatch("updateFooData");
  }
};
</script>
