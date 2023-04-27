/**
 * The following code implements the horizontal scrolling #about section
 */
const scrollTween = gsap
  .timeline({
    scrollTrigger: {
      trigger: '#container',
      pin: true,
      scrub: 1,
      end: '+=2800',
    },
  })
  .to('#container', {
    x: () => -(window.innerWidth * 2),
    ease: 'none',
    duration: 2,
  });
/**
 * Form submit could be cool. Lets do something with that
 * Maybe confetti would be fun?
 * Let's try implementing this (sight unseen haha)
 * https://gist.github.com/noahub/83733fae847d94e17e9835d5d4419109
 */

const formContainer = document.querySelector('.form-cont');
const form = document.querySelector('form');
const formConfirm = document.querySelector('.form-confirm');
const formBtn = document.querySelector('.form-btn');
let confirm = `<div class="form-confirm">
<h2>Your Message Has Been Sent!</h2>
<h3>We'll get back to you within 24 hours.</h3>
</div><canvas class='canvas-confetti'></canvas>`;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  const height = `${form.offsetHeight}px`;
  const width = `${form.offsetWidth}px`;
  formContainer.innerHTML = '';
  formContainer.style.height = height;
  formContainer.style.width = width;
  formContainer.insertAdjacentHTML('afterbegin', confirm);
  /**Lets take it up a notch and add some confetti */
  const canvas = document.querySelector('.canvas-confetti');
  console.log(canvas);
  canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

  canvas.confetti({
    particleCount: 400,
    spread: 50,
    origin: { y: 1.2 },
    gravity: 3,
  });
});

