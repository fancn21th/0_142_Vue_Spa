<template>
  <contact-list>
    <template #default="{contacts}">
      <ul>
        <li v-for="contact in contacts" :key="contact.key">
          {{ contact.firstname }}
          <b>{{ contact.lastname }}</b>
        </li>
      </ul>
    </template>
  </contact-list>
</template>

<script>
import ContactList from "./ContactList";

export default {
  components: { ContactList }
};
</script>

<style></style>
