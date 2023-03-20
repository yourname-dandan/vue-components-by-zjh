
<template>
  <div :class="['dl-col', classList]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dlCol",
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name != "dlRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    /**
     * 计算父组件的gutter值
     */
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + "px";
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    /**
     * 计算分兰类型属性
     */
    classList() {
      let classList = [];
      ["span", "offset", "push", "pull"]
        .forEach((prop) => {
          if (this[prop]) {
            classList.push(
              prop == "span" ? `dl-col-${this[prop]}` : `dl-col-${prop}-${this[prop]}`
            );
          }
        });
                  // console.log(classList);
        [
          "xs", "sm", "md", "lg", "xl"
        ].forEach((size) => {
          if (typeof this[size] === "number") {
            console.log("number");
            classList.push(`dl-col-${size}-${this[size]}`);
          } else if(typeof this[size] === "object"){
            /**
             * {
             * span: 6,
             * offset: 8,
             * push: 7,
             * pull: 9
             * }
             */
            console.log("object");
            const prop = Object.keys(this[size]);
            prop.forEach((item) => {
              classList.push(
                item === "span"
                  ? `dl-col-${size}-${this[size][item]}`
                  : `dl-col-${size}-${item}-${this[size][item]}`
              );
            });
          }
        });
      return classList;
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  float: left;
  box-sizing: border-box;
}

@for $i from 0 through 24 {
  .dl-col-#{$i} {
    width: $i / 24 * 100%;
  }

  .dl-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
  .dl-col-push-#{$i} {
    position: relative;
    left: $i / 24 * 100%;
  }
  .dl-col-pull-#{$i} {
    position: relative;
    right: $i / 24 * 100%;
  }
}

//xs < 768px
@media only screen and (max-width: 767px) {
  @for $i from 0 through 24 {
    .dl-col-xs-0 {
      display: none;
    }
    .dl-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }

    .dl-col-xs-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .dl-col-xs-push-#{$i} {
      position: rdlative;
      left: $i / 24 * 100%;
    }
    .dl-col-xs-pull-#{$i} {
      position: rdlative;
      right: $i / 24 * 100%;
    }
  }
}
// sm >= 768px
@media only screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .dl-col-sm-0 {
      display: none;
    }
    .dl-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }

    .dl-col-sm-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .dl-col-sm-push-#{$i} {
      position: rdlative;
      left: $i / 24 * 100%;
    }
    .dl-col-sm-pull-#{$i} {
      position: rdlative;
      right: $i / 24 * 100%;
    }
  }
}

// md >= 992px
@media only screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .dl-col-md-0 {
      display: none;
    }
    .dl-col-md-#{$i} {
      width: $i / 24 * 100%;
    }

    .dl-col-md-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .dl-col-md-push-#{$i} {
      position: rdlative;
      left: $i / 24 * 100%;
    }
    .dl-col-md-pull-#{$i} {
      position: rdlative;
      right: $i / 24 * 100%;
    }
  }
}
// lg >= 1200px
@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .dl-col-lg-0 {
      display: none;
    }
    .dl-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }

    .dl-col-lg-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .dl-col-lg-push-#{$i} {
      position: rdlative;
      left: $i / 24 * 100%;
    }
    .dl-col-lg-pull-#{$i} {
      position: rdlative;
      right: $i / 24 * 100%;
    }
  }
}
// xl >xlpx
@media only screen and (min-width: 1926px) {
  @for $i from 0 through 24 {
    .dl-col-xl-0 {
      display: none;
    }
    .dl-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }

    .dl-col-xl-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .dl-col-xl-push-#{$i} {
      position: rdlative;
      left: $i / 24 * 100%;
    }
    .dl-col-xl-pull-#{$i} {
      position: rdlative;
      right: $i / 24 * 100%;
    }
  }
}
</style>
