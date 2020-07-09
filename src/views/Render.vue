<template>
  <div>
    <foo-render tag="button"></foo-render>
    <hr />
    <baz-render></baz-render>
    <hr />
    <bar-render></bar-render>
    <hr />
    <list-render></list-render>
    <hr />
    <slot-render>
      <template #default="{subject}">
        {{ subject }}
      </template>
    </slot-render>
  </div>
</template>

<script>
import FooRender from "@/components/FooRender";
import BazRender from "@/components/BazRender";
import BarRender from "@/components/BarRender";
import ListRender from "@/components/ListRender";
import SlotRender from "@/components/SlotRender";

export default {
  components: {
    FooRender,
    BazRender,
    BarRender,
    ListRender,
    SlotRender,
  },
  data() {
    return {};
  },
};
</script>
