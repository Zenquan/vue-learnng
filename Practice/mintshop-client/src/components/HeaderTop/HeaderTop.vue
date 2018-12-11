<template>
  <header>
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
@common: "../../common";
@import "@{common}/style/mixins";

</style>
