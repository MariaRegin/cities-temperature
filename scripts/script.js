const cities = [
  "Amsterdam",
  "Berlin",
  "Bogota",
  "Dublin",
  "Istanbul",
  "Jerusalem",
  "London",
  "Mexico",
  "Moscow",
  "Oslo",
  "Pachuca",
  "Paris",
  "Quebec",
  "Rome",
];

let temperatures = [];
const button = document.querySelector(".btn");
const list = document.querySelector(".cities");

button.addEventListener("click", function showMessage() {
  for (city of cities) {
    const userInsertedTemperature = prompt(
      `What's the temperature in ${city}?`
    );
    const li = document.createElement("li");
    li.textContent = `Current temperature in ${city} is ${userInsertedTemperature}°C`;
    list.appendChild(li);
    temperatures.push(Number(userInsertedTemperature));
  }
  const min = document.createElement("li");
  const max = document.createElement("li");
  min.textContent =
    "Minimal temperature is " + Math.min(...temperatures) + "°C";
  max.textContent =
    "Maximum temperature is " + Math.max(...temperatures) + "°C";
  list.appendChild(min);
  list.appendChild(max);
});
