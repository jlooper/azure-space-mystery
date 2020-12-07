<template>
  <div>
    <blockquote class="speech-bubble">
      <p>Can I help you?</p>
      <cite>Hypatia</cite>
    </blockquote>
    <img src="/images/hypatia.jpg" />
  </div>
</template>
<style scoped>
.speech-bubble {
  filter: drop-shadow(-1px -1px 2px rgba(0, 0, 0, 0.1))
    drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.15));
  margin: 1rem;
  margin-bottom: 40px;
  padding: 1.5rem 2rem;
  position: relative;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  background: #8ca8d8;
  color: white;
}
.speech-bubble::before {
  border: 12.5px solid transparent;
  border-top: 12.5px solid #8ca8d8;
  border-bottom: 0;
  height: 0;
  width: 0;
  border-top-width: 25px;
  content: "";
  display: block;
  position: absolute;
  left: 3rem;
  bottom: -25px;
  transform-origin: center;
  transform: rotate(90deg) skew(-25deg) translateY(16.6666666667px);
}
.speech-bubble cite {
  position: absolute;
  bottom: -2rem;
  left: 4.5rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: black;
}
</style>