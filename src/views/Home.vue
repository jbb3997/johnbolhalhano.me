<template>
  <main>
    <section class="showcase">
      <div class="backdrop"></div>
      <div class="container">
        <div class="showcase__content">
          <h1><span class='text-primary'>Web</span> Developer</h1>
          <p class='lead'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          <router-link to="/contact" class="btn">Get in Touch</router-link>
        </div>
      </div>
    </section>
    <section class="home-info bg--dark">
      <div class="home-info__img"></div>
      <div class="home-info__content">
        <h2><span class='text-primary'>Learn</span> About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
        <router-link to="/about" class="btn btn--light">See More</router-link>
      </div>
    </section>
    <section class="box">
      <div class="box__item bg--light">
        <i class="fas fa-pencil-ruler fa-3x"></i>
        <h3>Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
      </div>
      <div class="box__item bg--primary">
        <i class="fas fa-code fa-3x"></i>
        <h3>Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
      </div>
      <div class="box__item bg--light">
        <i class="fas fa-chart-line fa-3x"></i>
        <h3>SEO</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
      </div>
    </section>
    <div class="clr"></div>
  </main>
</template>

<script>


export default {
  name: 'home'
}
</script>
