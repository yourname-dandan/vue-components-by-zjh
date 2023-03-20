<template>
  <div
    :class="[
      'dl-row',
      { 'dl-row--flex': this.type == 'flex' },
      this.justify !== 'start' && `is-justify-${justify}`,
      this.align !== 'top' && `is-align-${align}`,
    ]"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dlRow",
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: "start",
      validator: (val) => {
        return ["start", "end", "center", "space-between", "space-around"].includes(val);
      },
    },
    align: {
      type: String,
      default: "top",
      validator: (val) => {
        return ["top", "middle", "bottom"].includes(val);
      },
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = - this.gutter / 2 + "px";
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
};
</script>

<style scoped lang="scss">
.dl-row {
  &::after,
  &::before {
    display: block;
    content: "";
  }
  &::after {
    clear: both;
  }
  &--flex {
    display: flex;

    &::after,
    &::before {
      display: none;
      content: "";
    }
  }
  &.is-justify-end {
    justify-content: flex-end;
  }
  &.is-justify-center {
    justify-content: center;
  }
  &.is-justify-space-between {
    justify-content: space-between;
  }
  &.is-justify-space-around {
    justify-content: space-around;
  }
  &.is-align-middle {
    align-items: center;
  }
  &.is-align-bottom {
    align-items: end;
  }
}
</style>
