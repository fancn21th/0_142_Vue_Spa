<script>
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
      subject: "Oh my gosh",
    });
  },
};
</script>

<style></style>
