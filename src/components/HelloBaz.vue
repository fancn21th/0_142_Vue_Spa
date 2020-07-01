<template>
  <div>
    <ul>
      <li v-for="item in items" :item="item" :key="item">
        <slot :item="item">
          <!-- fallback content here -->
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    default: () => []
  }
};
</script>
