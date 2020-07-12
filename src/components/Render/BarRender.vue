<script>
import ToggleInput from '@/components/ToggleInput'

/**
 * 在这个案例里  我们实现了 双向绑定
 */

export default {
  props: [],
  data() {
    return {
      toggled: true
    }
  },
  render(createElement) {
    return createElement(ToggleInput, {
      props: {
        value: this.toggled
      },
      on: {
        input: newValue => (this.toggled = newValue)
      }
    })
  }
}
</script>
