const input = document.querySelector(".task4 input");
const button = document.querySelector(".task4__button");

button.addEventListener("click", () => {
  const seconds = parseInt(input.value);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Треба ввести число!");
    return;
  }

  alert(`Таймер запущено на ${seconds} секунд`);

  setTimeout(() => {
    alert("Час вийшов");
  }, seconds * 1000);
});
