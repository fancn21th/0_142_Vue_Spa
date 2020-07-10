<script>

/**
 * 在这个案例里  我们实现了 class 属性 和 事件响应
 */

export default {
  props: ["tag"],
  data() {
    return {};
  },
  render(createElement) {
    return createElement(
      this.tag,
      {
        attrs: {
          class: "btn btn-blue",
        },
        on: {
          click: () => {
            alert("I am clicked");
          },
        },
      },
      "Hello World"
    );
  },
};
</script>

<style></style>
