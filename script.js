const btnFooter = document.querySelector(".btn-footer");
const quantImg = document.querySelectorAll(".slides .image");
const image = document.querySelector("#current");
const prevent = document.querySelector("#btn-pre");
const next = document.querySelector("#btn-next");
let scroll = true;
let currentImg = 0;

for (let i = 0; i < quantImg.length; i++) {
  let div = document.createElement("div");
  div.id = i;
  btnFooter.appendChild(div);
}
document.getElementById("0").classList.add("imgCurrent");

const position = document.querySelectorAll(".btn-footer div");
for (let i = 0; i < position.length; i++) {
  position[i].addEventListener("click", () => {
    currentImg = position[i].id;
    scroll = false;
    slide();
  });
}

prevent.addEventListener("click", () => {
  currentImg--;
  scroll = false;
  slide();
});

next.addEventListener("click", () => {
  currentImg++;
  scroll = false;
  slide();
});

function slide() {
  if (currentImg >= quantImg.length) {
    currentImg = 0;
  } else if (currentImg < 0) {
    currentImg = quantImg.length - 1;
  }
  document.querySelector(".imgCurrent").classList.remove("imgCurrent");
  image.style.marginLeft = -405 * currentImg + "px";
  document.getElementById(currentImg).classList.add("imgCurrent");
}
setInterval(() => {
  if (scroll) {
    currentImg++;
    slide();
  } else {
    scroll = true;
  }
}, 7000);
