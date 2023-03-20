<template>
  <div class="dl-header" :style="{height: height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'dlHeader',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
}
</script>

<style>

</style>