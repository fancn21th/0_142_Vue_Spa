<template>
  <div>
    <h1>Vue.js Component-Driven Development Fundemental</h1>
    <ul>
      <li>Slot</li>
      <li>Render</li>
      <li>Dynamic Component</li>
    </ul>
    <key-features :pseudo-slot="({ foo }) => foo">
      <template v-slot:default="{ foo }">
        <b>{{ foo }}</b>
      </template>
    </key-features>
  </div>
</template>

<script>
import KeyFeatures from '../components/KeyFeatures'

export default {
  components: {
    KeyFeatures
  }
}
</script>

<style></style>
