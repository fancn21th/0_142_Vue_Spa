<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ foo }}</h2>
    <button @click="updateFoo">Update foo</button>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({ foo: state => state.foo })
  },
  methods: {
    updateFoo() {
      this.$store.dispatch("updateFooData");
    }
  },
  created() {
    this.$store.dispatch("updateFooData");
  }
};
</script>
