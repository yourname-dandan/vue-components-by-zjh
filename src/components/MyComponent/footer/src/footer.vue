<template>
  <div class="dl-footer" :style="{height: height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'dlFooter',
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