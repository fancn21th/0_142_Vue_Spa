<template>
  <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab.name"
      v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
      v-on:click="currentTab = tab"
    >
      {{ tab.name }}
    </button>
    <hr />
    <keep-alive>
      <component :is="currentTab.component" :tag="'button'"></component>
    </keep-alive>
    <!--
    <foo-render tag="button"></foo-render>
    <hr />
    <baz-render></baz-render>
    <hr />
    <bar-render></bar-render>
    <hr />
    <list-render></list-render>
    <hr />
    <slot-render>
      <template #default="{subject}">{{ subject }}</template>
    </slot-render>
    <contact-list-render></contact-list-render> -->
  </div>
</template>

<script>
import FooRender from '@/components/Render/FooRender'
import BazRender from '@/components/Render/BazRender'
import BarRender from '@/components/Render/BarRender'
import ListRender from '@/components/Render/ListRender'
import SlotRender from '@/components/SlotRender'
import ContactListRender from '@/components/ContactListRender'

const tabs = [
  {
    name: 'FooRender',
    component: FooRender
  },
  {
    name: 'BazRender',
    component: BazRender
  },
  {
    name: 'BarRender',
    component: BarRender
  },
  {
    name: 'ListRender',
    component: ListRender
  }
]

export default {
  components: {
    FooRender,
    BazRender,
    BarRender,
    ListRender,
    SlotRender,
    ContactListRender
  },
  data() {
    return {
      tabs,
      currentTab: tabs[0],
      tag: 'button'
    }
  }
}
</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
