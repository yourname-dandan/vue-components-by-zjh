<template>
  <div id="app">
    <h2>布局基础</h2>
    <dl-row>
      <dl-col :span="24"><div class="grid-content bg-purple-dark"></div></dl-col>
    </dl-row>
    <dl-row>
      <dl-col :span="12"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="12"><div class="grid-content bg-purple-light"></div></dl-col>
    </dl-row>
    <dl-row>
      <dl-col :span="8"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="8"><div class="grid-content bg-purple-light"></div></dl-col>
      <dl-col :span="8"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <dl-row>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple-light"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple-light"></div></dl-col>
    </dl-row>
    <dl-row>
      <dl-col :span="4"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="4"><div class="grid-content bg-purple-light"></div></dl-col>
      <dl-col :span="4"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="4"><div class="grid-content bg-purple-light"></div></dl-col>
      <dl-col :span="4"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="4"><div class="grid-content bg-purple-light"></div></dl-col>
    </dl-row>
    <h2>分兰布局</h2>
    <dl-row :gutter="20">
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <h2>分栏混合</h2>
    <dl-row :gutter="20">
      <dl-col :span="4"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="16"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="4"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <h2>分栏偏移</h2>
    <dl-row :gutter="20">
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <dl-row :gutter="20">
      <dl-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <dl-row :gutter="20">
      <dl-col :span="12" :push="2"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <dl-row :gutter="20">
      <dl-col :span="12" :pull="4"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <h2>对齐方式</h2>
    <dl-row type="flex" class="row-bg">
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple-light"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <dl-row type="flex" class="row-bg" justify="center">
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple-light"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <dl-row type="flex" class="row-bg" justify="end">
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple-light"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <dl-row type="flex" class="row-bg" justify="space-between">
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple-light"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <dl-row type="flex" class="row-bg" justify="space-around">
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple-light"></div></dl-col>
      <dl-col :span="6"><div class="grid-content bg-purple"></div></dl-col>
    </dl-row>
    <h2>响应式布局</h2>
    <dl-row :gutter="10">
      <dl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple"></div
      ></dl-col>
      <dl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple-light"></div
      ></dl-col>
      <dl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple"></div
      ></dl-col>
      <dl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple-light"></div
      ></dl-col>
    </dl-row>
    <h2>基于断点的隐藏类</h2>
    <dl-row>
      <dl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"></dl-col>
    </dl-row>
  </div>
</template>

<script>
// import dlRow from "@dldment/row.js";
// import dlCol from "@dldment/col.js";
export default {
  name: "App",
  // components: {
  //   dlRow,
  //   dlCol,
  // },
};
</script>

<style lang="scss">
.dl-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.dl-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
