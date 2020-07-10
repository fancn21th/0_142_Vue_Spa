<script>
import PrimaryButton from './PrimaryButton'

/**
 * 在这个案例里  我们区分 vue 事件和  dom 事件
 */

export default {
  props: [],
  data() {
    return {}
  },
  render(createElement) {
    return createElement(
      PrimaryButton,
      {
        nativeOn: {
          click: () => {
            alert('baz')
          }
        }
      },
      'Hello Baz World'
    )
  }
}
</script>
