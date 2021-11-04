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
  { img: "./assets/youtube.png", url: "https://www.youtube.com/channel/UCrQeCLMu3GGVZp52S8tvaHw" },
  { img: "./assets/instagram.png", url: "https://instagram.com/ardhptr21" },
  { img: "./assets/twitter.png", url: "https://twitter.com/ardhptr21" },
  { img: "./assets/github.png", url: "https://github.com/ardhptr21" },
  { img: "./assets/linkedin.png", url: "https://linkedin.com/in/ardhptr21" },
];

links.forEach(({ img, url }) => {
  linkWrapper.innerHTML += `<a href="${url}" class="icon" target="_blank" rel="norefferer">
  <img src="${img}" alt="${url}" />
</a>`;
});

/**--------------------------------------------
 *               RELOAD PAGE
 *---------------------------------------------**/
btn.onclick = () => window.location.reload();
