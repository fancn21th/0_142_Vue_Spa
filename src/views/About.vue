<template>
  <div class="about">
    <h1>我在这里做一些Spike...</h1>
    <h2>{{ foo }}</h2>
    <h2>{{ bazzz }}</h2>
    <button @click="updateFoo">Update foo</button>
    <hr />
    <input type="text" v-model="baz" />
  </div>
</template>

<script>
import { mapState } from "vuex";
/**
  在这个页面 演示的是 一个标准的 基于 vuex 的数据流 演示
*/

export default {
  data: function() {
    return {
      baz: "I'm baz",
      bazzz: "I'm bazzzz"
    };
  },
  computed: {
    ...mapState({ foo: state => state.foo })
  },
  methods: {
    updateFoo() {
      this.$store.dispatch("updateFooData");
    },
    updateBaz() {
      this.$store.dispatch("updateFooData");
    }
  },
  watch: {
    baz: function(newBaz) {
      this.bazzz = newBaz;
    }
  },
  created() {
    this.$store.dispatch("updateFooData");
  }
};
</script>
