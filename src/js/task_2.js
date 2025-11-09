const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")

let scale = 1;
let growing = true;
let color = 0;
let scale2 = 0;
let reduction = true;

setInterval(() => {
  scale += growing ? 0.05 : -0.05;
  if (scale >= 1.5) growing = false;
  if (scale <= 1) growing = true;
  box1.style.transform = `scale(${scale})`;
}, 100);

setInterval(() => {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   box2.style.backgroundColor = `rgb(${r},${g},${b})`;;
}, 150)


setInterval(() => {
  scale2 += reduction ? 0.05 : -0.05;
  if (scale2 >= 1) reduction = false;
  if (scale2 <= 0.5) reduction = true;
  box3.style.transform = `scale(${scale2})`;
}, 100)       