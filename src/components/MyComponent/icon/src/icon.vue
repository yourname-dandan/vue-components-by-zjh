<template>
  <i :class="['dl-icon',`dl-icon-${name}`]">
  </i>
</template>

<script>
export default {
    name: 'dlIcon',
    props: {
      name: {
        type: String
      }
    }
}
</script>

<style>

</style>