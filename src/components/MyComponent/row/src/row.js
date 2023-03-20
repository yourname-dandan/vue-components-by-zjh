export default {
    name: "dlRow",
    props: {
        tag: {
            type: String,
            default: 'div'
        },
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
          style.marginLeft = - (this.gutter / 2) + "px";
          style.marginRight = style.marginLeft;
        }
        return style;
      },
    },
    render (h) {
        return h(this.tag,{
            class: [
                'dl-row',
                { 'dl-row--flex': this.type == 'flex' },
                this.justify !== 'start' && `is-justify-${this.justify}`,
                this.align !== 'top' && `is-align-${this.align}`,
              ],
              style:this.style
        },this.$slots.default)
    }
  };