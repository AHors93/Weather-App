window.addEventListener("load", () => {
  let lon;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description')
  let temperatureDegree = document.querySelector('.temperature-degree')
  let locationCountry = document.querySelector('.location-country')
  let locationIcon = document.querySelector('.weather-icon')



  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=df93c2197bf833144bfed3469271dba7`
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const {temp} = data.main;
          const {description} = data.weather[0];
          const {country} = data.sys;
          const icon = data.weather[0].icon

        /** 
         * TODO - convert Kelvins into Celsuis or Fahrenheit 
         */

        temperatureDegree.textContent = temp; 
        temperatureDescription.textContent = description;
        locationCountry.textContent = country;
        locationIcon.innerHTML = `<img src="icons/${icon}"></img>;`

        });
    });
  }
});
