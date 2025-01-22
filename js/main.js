const main = document.querySelector("main");
const search_input = document.querySelector("#search");
const search_button = document.querySelector("#search-button");
const city_name = document.querySelector("#name");
const city_temp = document.querySelector("#temp");
const city_time = document.querySelector("#time");
const logo = document.querySelector("#logo");
const humidity = document.querySelector("#humidity");
const cloud = document.querySelector("#cloud");
const wind = document.querySelector("#wind");
const weather_description = document.querySelector("#weather-description");

const options = {
  method: "GET",
};
fetch(
  "https://api.weatherstack.com/current?access_key=9a8c5b0544b5d11afee4bd2c2af7444d&query=tehran",
  options
)
  .then((res) => {
    if (res.ok) return res.json();
    Promise.reject(err);
  })
  .then((data) => {
    console.log(data);

    city_time.innerHTML = data.location.localtime;
    city_name.innerHTML = "tehran";
    city_temp.innerHTML =
      data.current.temperature +
      `<sub class="text-white text-3xl translate-y-[-40px]">o</sub>`;
    if (
      data.current.weather_icons[0] ==
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
    ) {
      logo.src = "images/moon-b.svg";
      main.children[0].src = "images/night.jpg";
    } else if (
      data.current.weather_icons[0] ==
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
    ) {
      logo.src = "images/sun-b.svg";
      main.children[0].src = "images/clear.jpg";
    } else if (
      data.current.weather_icons[0] ==
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
    ) {
      logo.src = "images/cloud-b.svg";
      main.children[0].src = "images/clouds.jpg";
    } else if (
      data.current.weather_icons[0] ==
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0034_cloudy_with_heavy_rain_night.png"
    ) {
      logo.src = "images/rain-b.svg";
      main.children[0].src = "images/rain.jpg";
    } else if (
      data.current.weather_icons[0] ==
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0006_mist.png"
    ) {
      logo.src = "images/rain-b.svg";
      main.children[0].src = "images/rain.jpg";
    } else if (
      data.current.weather_icons[0] ==
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
    ) {
      logo.src = "images/rain-b.svg";
      main.children[0].src = "images/rain.jpg";
    } else if (
      data.current.weather_icons[0] ==
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0007_fog.png"
    ) {
      logo.src = "images/fog-b.svg";
      main.children[0].src = "images/mist.jpg";
    } else {
      logo.src = data.current.weather_icons[0];
      main.children[0].src = "images/rain.jpg";
    }

    wind.innerHTML = data.current.wind_speed + "km/h";
    cloud.innerHTML = data.current.cloudcover + "%";
    humidity.innerHTML = data.current.humidity + "%";
    weather_description.innerHTML = data.current.weather_descriptions[0];
  })
  .catch((err) => console.log(err));

search_button.addEventListener("click", () => {
  const url = `https://api.weatherstack.com/current?access_key=9a8c5b0544b5d11afee4bd2c2af7444d&query=${search_input.value}`;
  const options = {
    method: "GET",
  };

  fetch(url, options)
    .then((res) => {
      if (res.ok) return res.json();
      Promise.reject(err);
    })
    .then((data) => {
      city_time.innerHTML = data.location.localtime;
      city_name.innerHTML = search_input.value;
      city_temp.innerHTML =
        data.current.temperature +
        `<sub class="text-white text-3xl translate-y-[-40px]">o</sub>`;
      if (
        data.current.weather_icons[0] ==
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
      ) {
        logo.src = "images/moon-b.svg";
        main.children[0].src = "images/night.jpg";
      } else if (
        data.current.weather_icons[0] ==
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
      ) {
        logo.src = "images/sun-b.svg";
        main.children[0].src = "images/clear.jpg";
      } else if (
        data.current.weather_icons[0] ==
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0007_fog.png"
      ) {
        logo.src = "images/fog-b.svg";
        main.children[0].src = "images/mist.jpg";
      } else if (
        data.current.weather_icons[0] ==
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
      ) {
        logo.src = "images/cloud-b.svg";
        main.children[0].src = "images/clouds.jpg";
      } else if (
        data.current.weather_icons[0] ==
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0034_cloudy_with_heavy_rain_night.png"
      ) {
        logo.src = "images/rain-b.svg";
        main.children[0].src = "images/rain.jpg";
      } else if (
        data.current.weather_icons[0] ==
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0033_cloudy_with_light_rain_night.png"
      ) {
        logo.src = "images/rain-b.svg";
        main.children[0].src = "images/rain.jpg";
      } else if (
        data.current.weather_icons[0] ==
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0006_mist.png"
      ) {
        logo.src = "images/rain-b.svg";
        main.children[0].src = "images/rain.jpg";
      } else if (
        data.current.weather_icons[0] ==
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
      ) {
        logo.src = "images/rain-b.svg";
        main.children[0].src = "images/rain.jpg";
      } else {
        logo.src = data.current.weather_icons[0];
        main.children[0].src = "images/rain.jpg";
      }
      wind.innerHTML = data.current.wind_speed + "km/h";
      cloud.innerHTML = data.current.cloudcover + "%";
      humidity.innerHTML = data.current.humidity + "%";
      weather_description.innerHTML = data.current.weather_descriptions[0];
      search_input.value = "";
      search_input.focus();
    })
    .catch((err) => console.log(err));
});

search_input.addEventListener("keyup", (e) => {
  if (e.keycode || e.which == 13) {
    search_button.click();
  }
});
