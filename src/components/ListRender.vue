<script>
/**
 * 在这个案例里  我们创建 数组子元素
 */

const contacts = [
  {
    firstname: 'alex',
    lastname: 'fan'
  },
  {
    firstname: 'joe',
    lastname: 'lee'
  },
  {
    firstname: 'kevin',
    lastname: 'guo'
  }
]

export default {
  props: [],
  data() {
    return { contacts }
  },
  render(createElement) {
    return createElement(
      'ul',
      {},
      this.contacts.map(contact => {
        return createElement(
          'li',
          {},
          `${contact.firstname} ${contact.lastname}`
        )
      })
    )
  }
}
</script>

<style></style>
