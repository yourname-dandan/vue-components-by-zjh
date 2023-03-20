<template>
  <button 
    class="dl-button" 
    :type="nativeType"
    @click="e => $emit('click', e)"
    :class="[type ? `dl-button--${type}` : '' , 
    size ? `dl-button--${size}` : '',
    {'is-plain':plain},
    {'is-round':round},
    {'is-circle':circle},
    {'is-disabled':disabled},
    {'is-text':text},
  ]">
    <i :class="icon" v-if="icon && !loading"></i>
    <i class="dl-icon-loading" v-if="loading"></i>
    <span v-if="$slots.default">
        <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
    name:'dlButton',
    props: {
        type: String,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        icon: String,
        disabled: Boolean,
        text: Boolean,
        loading: Boolean,
        size: String,
        nativeType: {
          type: String,
          default: 'button'
        }
    }
}
</script>

<style>

</style>