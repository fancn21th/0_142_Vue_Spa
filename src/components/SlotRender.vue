<script>
/**
 * 在这个案例里  我们实现 组件只是提供数据
 */

export default {
  // render(createElement) {
  //   return createElement(
  //     "span",
  //     {
  //       attrs: {
  //         class: "text-xl text-blue font-bold",
  //       },
  //     },
  //     [
  //       this.$scopedSlots.default({
  //         subject: "Oh my gosh",
  //       }),
  //     ]
  //   );
  // },
  render() {
    return this.$scopedSlots.default({
      subject: 'Oh my gosh'
    })
  }
}
</script>

<style></style>
