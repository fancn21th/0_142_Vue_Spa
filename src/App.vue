<template>
  <div id="app" class="nav-bar">
    <ul class="nav">
      <li class="nav__item"><router-link to="/">Home</router-link></li>
      <li class="nav__item"><router-link to="/about">About</router-link></li>
      <li class="nav__item"><router-link to="/render">Render</router-link></li>
    </ul>
    <router-view />
    <portal-target name="modals"></portal-target>
  </div>
</template>

<style src="./assets/css/app.css" />
