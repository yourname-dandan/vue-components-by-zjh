<template>
  <a 
   :href="href"
   class="dl-link"
   :class="[ 
   type ?`dl-link--${type}`:'',
   {
    'is-underline' : underline && !disabled,
    'is-disabled' : disabled,
   },
   ]"
   >

   <i :class="icon" v-if="icon"></i>
   <span v-if="$slots.default">
    <slot></slot>
   </span>
  </a>
</template>

<script>
export default {
    name: 'dlLink',
    props: {
      href: String,
      underline: {
        type: Boolean,
        default: true
      },
      type: String,
      disabled: Boolean,
      icon: String,
    }
}
</script>

<style>

</style>