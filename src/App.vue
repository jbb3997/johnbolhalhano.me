<template>
  <div id="app">
    <Navigation/>
    <transition name="router-anim" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  }
}
</script>



