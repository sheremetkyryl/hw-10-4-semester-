const box = document.getElementById("box");
const clickScore = document.getElementById("score");
const area = document.getElementById("box__area");

let score = 0;
let time = 30000;

const moveBox = () => {
    const maxX = area.clientWidth - box.offsetWidth;
    const maxY = area.clientHeight - box.offsetHeight;

    const x = Math.floor(Math.random() * maxX)
    const y = Math.floor(Math.random() * maxY)

    box.style.left = `${x}px`
    box.style.top = `${y}px`
}
setTimeout(() => {
    clearInterval(gameInverval)
}, time)
const gameInverval = setInterval(moveBox, 800);

box.addEventListener("click", () => {
    score++;
    clickScore.textContent = `${score}`
})