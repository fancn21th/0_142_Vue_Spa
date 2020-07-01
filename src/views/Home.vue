<template>
  <div class="home">
    <hello-baz :items="fooList">
      <template v-slot:default="slotProps">{{ slotProps.item }}</template>
    </hello-baz>

    <button @click="updateFoo">Update Foo</button>
  </div>
</template>

<script>
import HelloBaz from "@/components/HelloBaz.vue";

export default {
  name: "Home",
  data: function() {
    return {
      fooList: ["a", "b"]
    };
  },
  components: {
    HelloBaz
  },
  methods: {
    updateFoo() {}
  }
};
</script>
