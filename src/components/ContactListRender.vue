<template>
  <contact-list>
    <template #default="{contacts, loading}">
      <div>
        <span v-if="loading">Data is loading...</span>
        <ul v-else>
          <li v-for="contact in contacts" :key="contact.key">
            {{ contact.firstname }}
            <b>{{ contact.lastname }}</b>
          </li>
        </ul>
      </div>
    </template>
  </contact-list>
</template>

<script>
import ContactList from './ContactList'

export default {
  components: { ContactList }
}
</script>

<style></style>
