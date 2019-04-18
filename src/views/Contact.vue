<template>
  <main>
    <section class="contact-form py-3">
      <div class="container">
        <h1 class="l-heading"><span class="text-primary">Contact</span> Me</h1>
        <p>Please fill out the form below to contact me</p>
        <form name="contact" method="POST" action="/thank-you" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
          </div>
          <div class="form-group">
            <label for="message">Mesage</label>
            <textarea name="message" id="message" requried></textarea>
          </div>
          <button type="submit" class="btn">Submit</button>
        </form>
      </div>
    </section>
    <section class="box contact">
      <div class="box__item bg--dark">
        <i class="fas fa-map-marker-alt fa-3x"></i>
        <h3>Location</h3>
        <p>Angeles City Pampanga Philippines</p>
      </div>
      <div class="box__item bg--dark">
        <i class="fas fa-phone fa-3x"></i>
        <h3>Phone Number</h3>
        <p>(+63) 942-468-3319</p>
      </div>
      <div class="box__item bg--dark">
        <i class="fas fa-envelope fa-3x"></i>
        <h3>Email Address</h3>
        <p>info@johnbolhano.me</p>
      </div>
    </section>
    <div class="clr"></div>
  </main>
</template>

<style>
.hidden {display: none;}
</style>
