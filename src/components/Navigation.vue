<template>
  <nav class="main-nav">
    <div class="container">
      <h1 class="main-nav__logo"><router-link to="/">JB</router-link></h1>
      <ul class="main-nav__items">
        <li class="main-nav__item"><router-link to="/">Home</router-link></li>
        <li class="main-nav__item"><router-link to="/about">About</router-link></li>
        <li class="main-nav__item"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'navigation',
}
</script>
