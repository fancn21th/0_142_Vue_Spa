<script>
import { mockFetchContacts } from "../api";

export default {
  data() {
    return {
      contacts: []
    };
  },
  created() {
    mockFetchContacts().then(contacts => (this.contacts = contacts));
  },
  render() {
    return this.$scopedSlots.default({
      contacts: this.contacts
    });
  }
};
</script>

<style></style>
