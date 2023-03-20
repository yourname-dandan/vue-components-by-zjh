<template>
  <div id="app">
    <dl-link href="https://element.dleme.io" target="_blank">默认链接</dl-link>
    <dl-link type="primary">主要链接</dl-link>
    <dl-link type="success">成功链接</dl-link>
    <dl-link type="warning">警告链接</dl-link>
    <dl-link type="danger">危险链接</dl-link>
    <dl-link type="info">信息链接</dl-link>
    <hr />
    <dl-link disabled>默认链接</dl-link>
    <dl-link type="primary" disabled>主要链接</dl-link>
    <dl-link type="success" disabled>成功链接</dl-link>
    <dl-link type="warning" disabled>警告链接</dl-link>
    <dl-link type="danger" disabled>危险链接</dl-link>
    <dl-link type="info" disabled>信息链接</dl-link>
    <hr />
    <div>
      <dl-link icon="dl-icon-edit">编辑</dl-link>
      <dl-link>查看<i class="dl-icon-view dl-icon--right"></i> </dl-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss"></style>
