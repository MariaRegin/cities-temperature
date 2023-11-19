const cities = [
  "Aberdeen",
  "Amsterdam",
  "Barcelona",
  "Berlin",
  "Bogota",
  "Dublin",
  "Hoi An",
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
  "Tel-aviv",
];

let temperatures = [];
const button = document.querySelector(".btn");
const list = document.querySelector(".cities");
let newElement = document.createElement("li");

button.addEventListener(
  "click",
  function () {
    for (let city of cities) {
      const userInsertedTemperature = prompt(
        `What's the temperature in ${city}?`
      );
      temperatures.push(Number(userInsertedTemperature));
      console.log(temperatures);
      for (item of temperatures) {
        newElement.innerHTML = `Temperature in ${city} is ${item} degree`;
        list.append(newElement);
      }
    }
  }
  //return temperatures;
);
