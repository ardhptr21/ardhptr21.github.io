const core = document.querySelector(".core");
const dino = document.querySelector(".dino");
const desc = document.querySelector(".desc");
const btn = document.querySelector("button");
const linkWrapper = document.querySelector(".link");

/**----------------------
 *    HOVER EVENT
 *------------------------**/
core.onmouseover = () => {
  dino.style.filter = "grayscale(0)";
  desc.innerText = "Apologize, it's just a fake page, you can follow some links below, thanks 💚";
  desc.classList.add("real");
  btn.classList.add("real");
};

core.onmouseleave = () => {
  dino.style.filter = "grayscale(1)";
  desc.innerText = "We can't find the page you're looking for. Make sure you entered the correct url.";
  desc.classList.remove("real");
  btn.classList.remove("real");
};

/**----------------------
 *    LINK MANIPULATE
 *------------------------**/
const links = [
  { img: "./assets/youtube.png", url: "https://www.youtube.com/channel/UCrQeCLMu3GGVZp52S8tvaHw", title: "Youtube" },
  { img: "./assets/instagram.png", url: "https://instagram.com/ardhptr21", title: "Instagram" },
  { img: "./assets/twitter.png", url: "https://twitter.com/ardhptr21", title: "Twitter" },
  { img: "./assets/github.png", url: "https://github.com/ardhptr21", title: "Github" },
  { img: "./assets/linkedin.png", url: "https://linkedin.com/in/ardhptr21", title: "Linkedin" },
];

links.forEach(({ img, url, title }) => {
  linkWrapper.innerHTML += `<a href="${url}" class="icon" target="_blank" rel="norefferer" data-tooltip=${title}>
  <img src="${img}" alt="${url}" />
</a>`;
});

/**--------------------------------------------
 *               RELOAD PAGE
 *---------------------------------------------**/
btn.onclick = () => {
  // window.location.reload()
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const skew = 1;
  callConfetti(duration, animationEnd, skew);
};

/**----------------------
 *    CONFETTI
 *------------------------**/
function callConfetti(duration, animationEnd, skew) {
  const timeLeft = animationEnd - Date.now();
  const ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: Math.random() * skew - 0.2,
    },
    colors: ["#ffffff"],
    shapes: ["circle"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4),
  });

  if (timeLeft > 0) {
    requestAnimationFrame(() => callConfetti(duration, animationEnd, skew));
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
