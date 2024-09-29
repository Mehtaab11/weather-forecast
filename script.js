const wheatherImg = document.getElementById("wheather-img");
const degree = document.getElementById("degree-display");
const city = document.getElementById("city-name");
const humidity = document.getElementById("humidity-text");
const wind = document.getElementById("wind-text");
const search = document.getElementById("search");
const input = document.getElementById("input");
const card = document.getElementById("main-card");
const errorMsg = document.getElementById("error-msg");

search.addEventListener("click", () => {
  const cityName = input.value;

  const apiKey = "f4d1300de03dfb1d193b8cb0833f3938";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  async function data() {
    try {
      const response = await fetch(apiUrl);
      const weatherData = await response.json();
      console.log(weatherData);

      city.innerText = weatherData.name;
      humidity.innerText = `${weatherData.main.humidity}%`;
      wind.innerText = `${weatherData.wind.speed} Km/h`;
      degree.innerText = `${Math.round(weatherData.main.temp)}°C`;

      card.style.display = "block";
      errorMsg.style.display = "none";

      switch (weatherData.weather[0].main) {
        case "Drizzle":
          wheatherImg.setAttribute("src", "images/drizzle.png");
          break;

        case "Clear":
          wheatherImg.setAttribute("src", "images/clear.png");
          break;

        case "Clouds":
          wheatherImg.setAttribute("src", "images/clouds.png");
          break;

        case "Rain":
          wheatherImg.setAttribute("src", "images/rain.png");
          break;

        case "Mist":
          wheatherImg.setAttribute("src", "images/mist.png");
          break;

        case "Snow":
          wheatherImg.setAttribute("src", "images/snow.png");
          break;

        default:
          break;
      }
    } catch (error) {
      // console.error("there was an error fetching the data");
      card.style.display = "none";
      errorMsg.style.display = "block";
    }
  }

  data();
});
