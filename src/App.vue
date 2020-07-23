<template>
  <div id="app" class="nav-bar">
    <ul class="nav">
      <li class="nav__item">
        <router-link name="home" to="/">Home</router-link>
      </li>
      <li class="nav__item">
        <router-link name="about" to="/about">About</router-link>
      </li>
      <li class="nav__item">
        <router-link name="render" to="/render">Render</router-link>
      </li>
      <li class="nav__item">
        <router-link name="component" to="/comp">Component</router-link>
      </li>
    </ul>
    <router-view />
    <portal-target name="modals"></portal-target>
  </div>
</template>

<style src="./assets/css/app.css" />
<style>
.nav {
  display: block;
  padding: 20px 0;
  background-color: #eee;
}

.nav__item {
  display: inline-block;
  margin-right: 20px;
}

.nav_item a {
  text-decoration: none;
}
</style>
