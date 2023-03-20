export default {
  name: "dlCol",
  props: {
    tag: {
      type: String,
      default: "div",
    },
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
    xl: [Number, Object],
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
      ["span", "offset", "push", "pull"].forEach((prop) => {
        if (this[prop]) {
          classList.push(prop == "span" ? `dl-col-${this[prop]}` : `dl-col-${prop}-${this[prop]}`);
        }
      });
      // console.log(classList);
      ["xs", "sm", "md", "lg", "xl"].forEach((size) => {
        if (typeof this[size] === "number") {
          console.log("number");
          classList.push(`dl-col-${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
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
  render (h) {
    return h(this.tag,{
        class: ['dl-col', this.classList],
        style: this.style
    },this.$slots.default)
  }
};
