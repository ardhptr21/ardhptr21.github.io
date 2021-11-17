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
  startConfetti();
};
core.onmouseleave = () => {
  dino.style.filter = "grayscale(1)";
  desc.innerText = "We can't find the page you're looking for. Make sure you entered the correct url.";
  desc.classList.remove("real");
  btn.classList.remove("real");
  stopConfetti();
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
btn.onclick = () => window.location.reload();

/**----------------------
 *    CONFETTI
 *------------------------**/
const startConfetti = () => {
  setTimeout(function () {
    confetti.start();
  }, 100); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};
const stopConfetti = () => {
  setTimeout(function () {
    confetti.stop();
  }, 1000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};
