<template>
  <span>
    <!-- pseudo slot -->
    <b>{{ pseudoSlot({ foo }) }}</b>
    <hr />
    <!-- slot -->
    <slot :foo="foo"></slot>
  </span>
</template>

<script>
export default {
  props: ['pseudoSlot'],
  data() {
    return {
      foo: 'I am foo'
    }
  }
}
</script>

<style></style>
