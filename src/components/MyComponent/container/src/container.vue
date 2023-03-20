<template>
  <div :class="['dl-container',{'is-vertical': isVertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'dlContainer',
    props: {
        direction: {
            type: String,
            validator: val => ['horizontal','vertical'].includes(val)
        }
    },
    computed: {
        isVertical () {
            if(this.direction === 'vertical') {
                return true
            }else if(this.direction === 'horizontal'){
                return false
            }
            // console.log("111");
            if(this.$slots && this.$slots.default) {
               return this.$slots.default.some(v => {
                    const tag = v.componentOptions && v.componentOptions.tag;
                    // console.log(tag);
                    if(tag === 'dl-header' || tag === 'dl-footer'){
                        return true
                    }
                })
            }else {
                return false
            }
        }
    }
}
</script>

<style>

</style>