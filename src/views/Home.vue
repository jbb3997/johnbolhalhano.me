<template>
  <main>
    <section class="showcase">
      <div class="backdrop"></div>
      <div class="container">
        <div class="showcase__content">
          <h1><span class='text-primary'>Front-End</span> Developer</h1>
          <p class='lead'>Producing high quality responsive websites and elegant code</p>
          <router-link to="/contact" class="btn">Get in Touch</router-link>
        </div>
      </div>
    </section>
    <section class="home-info bg--dark">
      <div class="home-info__img"></div>
      <div class="home-info__content">
        <h2><span class='text-primary'>How</span> Can I help?</h2>
        <p>Hi there, I am John, a web and front-end developer. My role is to help you to get your products and services out on the web. To do this I’ll create up to date, stunning and functioning website and design using the latest web technologies.</p>
        <router-link to="/about" class="btn btn--light">See More</router-link>
      </div>
    </section>
    <section class="box">
      <div class="box__item bg--light">
        <i class="fas fa-pencil-ruler fa-3x"></i>
        <h3>Design</h3>
        <p>I make stunning, updated professional website designs.</p>
      </div>
      <div class="box__item bg--primary">
        <i class="fas fa-code fa-3x"></i>
        <h3>Development</h3>
        <p>I work with Front end technologies, HTML/CSS and with the popular cms WordPress</p>
      </div>
      <div class="box__item bg--light">
        <i class="fas fa-chart-line fa-3x"></i>
        <h3>SEO</h3>
        <p>I make your website SEO friendly.</p>
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
