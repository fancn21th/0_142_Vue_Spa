<script>
import PrimaryButton from "./PrimaryButton";

export default {
  props: [],
  data() {
    return {};
  },
  render(createElement) {
    return createElement(
      PrimaryButton,
      {
        nativeOn: {
          click: () => {
            alert("baz");
          },
        },
      },
      "Hello Baz World"
    );
  },
};
</script>
