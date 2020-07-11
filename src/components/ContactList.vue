<script>
import { mockFetchContacts } from '../api'

export default {
  data() {
    return {
      contacts: [],
      loading: true
    }
  },
  created() {
    mockFetchContacts().then(contacts => {
      this.contacts = contacts
      this.loading = false
    })
  },
  render() {
    return this.$scopedSlots.default({
      contacts: this.contacts,
      loading: this.loading
    })
  }
}
</script>

<style></style>
