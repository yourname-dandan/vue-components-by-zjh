<template>
  <div class="dl-aside" :style="{width: width}">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'dlAside',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
}
</script>

<style>

</style>