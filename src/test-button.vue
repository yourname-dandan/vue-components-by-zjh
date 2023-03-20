<template>
  <div id="app">
    <dl-row>
      <dl-button>默认按钮</dl-button>
      <dl-button type="primary">主要按钮</dl-button>
      <dl-button type="success">成功按钮</dl-button>
      <dl-button type="info">信息按钮</dl-button>
      <dl-button type="warning">警告按钮</dl-button>
      <dl-button type="danger">危险按钮</dl-button>
    </dl-row>
    <hr />
    <dl-row>
      <dl-button plain>朴素按钮</dl-button>
      <dl-button type="primary" plain>主要按钮</dl-button>
      <dl-button type="success" plain>成功按钮</dl-button>
      <dl-button type="info" plain>信息按钮</dl-button>
      <dl-button type="warning" plain>警告按钮</dl-button>
      <dl-button type="danger" plain>危险按钮</dl-button>
    </dl-row>
    <hr />
    <dl-row>
      <dl-button round>圆角按钮</dl-button>
      <dl-button type="primary" round>主要按钮</dl-button>
      <dl-button type="success" round>成功按钮</dl-button>
      <dl-button type="info" round>信息按钮</dl-button>
      <dl-button type="warning" round>警告按钮</dl-button>
      <dl-button type="danger" round>危险按钮</dl-button>
    </dl-row>
    <hr />
    <dl-row>
      <dl-button icon="dl-icon-search" circle></dl-button>
      <dl-button type="primary" icon="dl-icon-edit" circle></dl-button>
      <dl-button type="success" icon="dl-icon-check" circle></dl-button>
      <dl-button type="info" icon="dl-icon-message" circle></dl-button>
      <dl-button type="warning" icon="dl-icon-star-off" circle></dl-button>
      <dl-button type="danger" icon="dl-icon-delete" circle></dl-button>
    </dl-row>
    <h2>禁用状态</h2>
    <dl-row>
      <dl-button disabled>默认按钮</dl-button>
      <dl-button type="primary" disabled>主要按钮</dl-button>
      <dl-button type="success" disabled>成功按钮</dl-button>
      <dl-button type="info" disabled>信息按钮</dl-button>
      <dl-button type="warning" disabled>警告按钮</dl-button>
      <dl-button type="danger" disabled>危险按钮</dl-button>
    </dl-row>
    <hr />
    <dl-row>
      <dl-button plain disabled>朴素按钮</dl-button>
      <dl-button type="primary" plain disabled>主要按钮</dl-button>
      <dl-button type="success" plain disabled>成功按钮</dl-button>
      <dl-button type="info" plain disabled>信息按钮</dl-button>
      <dl-button type="warning" plain disabled>警告按钮</dl-button>
      <dl-button type="danger" plain disabled>危险按钮</dl-button>
    </dl-row>
    <h2>文字、图标、加载中、尺寸按钮</h2>
    <dl-button type="text">文字按钮</dl-button>
    <dl-button type="text" disabled>文字按钮</dl-button>
    <hr />
    <dl-button type="primary" icon="dl-icon-edit"></dl-button>
    <dl-button type="primary" icon="dl-icon-share"></dl-button>
    <dl-button type="primary" icon="dl-icon-delete"></dl-button>
    <dl-button type="primary" icon="dl-icon-search">搜索</dl-button>
    <dl-button type="primary">上传<i class="dl-icon-upload dl-icon--right"></i></dl-button>
    <hr />
    <dl-button type="primary" :loading="true">加载中</dl-button>
    <hr />
    <dl-row>
      <dl-button>默认按钮</dl-button>
      <dl-button size="medium">中等按钮</dl-button>
      <dl-button size="small">小型按钮</dl-button>
      <dl-button size="mini">超小按钮</dl-button>
    </dl-row>
    <hr />
    <dl-row>
      <dl-button round>默认按钮</dl-button>
      <dl-button size="medium" round>中等按钮</dl-button>
      <dl-button size="small" round>小型按钮</dl-button>
      <dl-button size="mini" round>超小按钮</dl-button>
    </dl-row>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss"></style>
