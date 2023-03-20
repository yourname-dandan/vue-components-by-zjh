<template>
  <div id="app">
    <dl-container>
      <dl-header height="200px">Header</dl-header>
      <dl-main>Main</dl-main>
    </dl-container>
    <hr />
    <dl-container>
      <dl-header>Header</dl-header>
      <dl-main>Main</dl-main>
      <dl-footer>Footer</dl-footer>
    </dl-container>
    <hr />
    <dl-container>
      <dl-aside width="200px">Aside</dl-aside>
      <dl-main>Main</dl-main>
    </dl-container>
    <hr />
    <dl-container>
      <dl-header>Header</dl-header>
      <dl-container>
        <dl-aside width="200px">Aside</dl-aside>
        <dl-main>Main</dl-main>
      </dl-container>
    </dl-container>
    <hr />
    <dl-container>
      <dl-header>Header</dl-header>
      <dl-container>
        <dl-aside width="200px">Aside</dl-aside>
        <dl-container>
          <dl-main>Main</dl-main>
          <dl-footer>Footer</dl-footer>
        </dl-container>
      </dl-container>
    </dl-container>
    <hr />
    <dl-container>
      <dl-aside width="200px">Aside</dl-aside>
      <dl-container>
        <dl-header>Header</dl-header>
        <dl-main>Main</dl-main>
      </dl-container>
    </dl-container>
    <hr />
    <dl-container>
      <dl-aside width="200px">Aside</dl-aside>
      <dl-container>
        <dl-header>Header</dl-header>
        <dl-main>Main</dl-main>
        <dl-footer>Footer</dl-footer>
      </dl-container>
    </dl-container>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
.dl-header,
.dl-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.dl-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.dl-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .dl-container {
  margin-bottom: 40px;
}

.dl-container:nth-child(5) .dl-aside,
.dl-container:nth-child(6) .dl-aside {
  line-height: 260px;
}

.dl-container:nth-child(7) .dl-aside {
  line-height: 320px;
}
</style>
