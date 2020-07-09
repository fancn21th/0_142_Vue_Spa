<script>
const contacts = [
  {
    firstname: "alex",
    lastname: "fan",
  },
  {
    firstname: "joe",
    lastname: "lee",
  },
  {
    firstname: "kevin",
    lastname: "guo",
  },
];

export default {
  props: [],
  data() {
    return { contacts };
  },
  render(createElement) {
    return createElement(
      "ul",
      {},
      this.contacts.map((contact) => {
        return createElement(
          "li",
          {},
          `${contact.firstname} ${contact.lastname}`
        );
      })
    );
  },
};
</script>

<style></style>
