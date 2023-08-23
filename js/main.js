const keyAPI = "67446ff386560a9f15278f412a1b31a9";

function weatherApi(data) {
  console.log(data);
  console.log(data.name);

  const main = document.querySelector(".geo");
  const articleTag = document.createElement("article");
  const name = main.appendChild(articleTag);
  name.innerHTML = data.name;
  name.innerHTML = `<h3>City: ${data.name}</h3> 
  <h3>Weather: ${data.weather[0].main}</h3>
  <h3>Temprature: ${data.main.temp}</h3>
  <h3>Wind: ${data.wind.speed}</h3>
  <h3>Feels Like : ${data.main.feels_like}</h3>
  `;

  if (data.weather[0].main === "Rain") {
    document.querySelector(".bg").style.background =
      "url(https://i.ytimg.com/vi/f1n8phCdMzc/maxresdefault.jpg)";
  } else if (data.weather[0].main === "Clouds") {
    document.querySelector(".bg").style.background =
      "url(https://d2j02ha532z66v.cloudfront.net/wp-content/uploads/2023/01/clouds.jpg)";
  } else if (data.weather[0].main === "Snow") {
    document.querySelector(".bg").style.background =
      "url(https://i.redd.it/rsfs2zo42ata1.jpg)";
  } else if (data.weather[0].main === "Clear") {
    document.querySelector(".bg").style.background =
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZ8SDSLykILJNF_ash8M8gyPd2ZtaxLXjzA&usqp=CAU)";
  }
}

async function getWeather(url) {
  const response = await fetch(url);
  const data = await response.json();
  weatherApi(data);
}

function getLtd(input) {
  document.querySelector(".lat").innerHTML = input;
}
function getLong(input) {
  document.querySelector(".lgt").innerHTML = input;
}

function onSubmit(e) {
  e.preventDefault();

  const ltd = document.querySelector(".lat").innerHTML;
  const long = document.querySelector(".lgt").innerHTML;
  const newURL = `https://api.openweathermap.org/data/2.5/weather?lat=${ltd}&lon=${long}&appid=${keyAPI}&units=metric`;
  const main = document.querySelector(".geo");
  main.innerHTML = "";
  getWeather(newURL);

  document.querySelector(".ltd").value = "";
  document.querySelector(".long").value = "";
}

function getCurrentWeather() {
  navigator.geolocation.getCurrentPosition(showPosition);
  console.log();
}

function showPosition(position) {
  const keyAPI = "67446ff386560a9f15278f412a1b31a9";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${keyAPI}&units=metric`;

  getWeather(url);
}

getCurrentWeather();

const submit = document.getElementById("submit");
submit.addEventListener("click", onSubmit);
