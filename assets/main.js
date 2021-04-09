const renderCitiesFromLocalStorage = (citiesFromLocalStorage) => {
  //for each city, construct a list item and append to the list group.
};

const getFromLocalStorage = () => {};

const getCurrentData = (oneApiData) => {
  //from object, extract the data points you need for the return data
  return {
    name: "",
    date: "",
    iconURL: "",
    temperature: "",
    humidity: "",
    windSpeed: "",
    uvIndex: 0,
  };
};

const getForecastData = (oneApiData) => {
  //iterate and construct the return data array
  return [
    {
      date: "",
      iconURL: "",
      temperature: "",
      humidity: "",
    },
  ];
};
renderCurrentCardComponent = (dataFromServer) => {
  const currentDate = moment().format("DD/MM/YYYY");
  $("#weather-container").append(`<h2>
  ${dataFromServer.name} <span>(${currentDate}) </span><span><img src="https://openweathermap.org/img/w/${dataFromServer.weather[0].icon}.png"></span>
</h2>`);
};

const getOneCallApiUrl = (dataFromServer) => {
  const longLatObject = {
    lon: dataFromServer.coord.lon,
    lat: dataFromServer.coord.lat,
  };
  console.log(longLatObject); //does not work

  const oneCallApiUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=d34a16a53b39e4eaf211ff76b0adf70c";
  //whatever your application code is goes here
  //1. from the datafromserver get the lat and long
  //2. use lat and long to contruct next URL with 5 day weather and store in variable called oneCallApiUrl
  //once you have the next URL:
  const functionForJSON = (responseObject) => {
    // unless you have some logic here do that before you return
    return responseObject.json();
  };
  const functionForApplication = (dataFromServer) => {
    const oneApiData = dataFromServer;
    //take current day data and forecast data from here by calling a function for each
    const currentData = getCurrentData();
    const forecastData = getForecastData();
  };

  renderForecastComponents = (forecastData) => {};

  const functionToHandleError = (errorObject) => {
    console.log("Something went wrong");
    // handle your error here according to your application
  };

  fetch(currentWeatherUrl)
    .then(functionForJSON)
    .then(functionForApplication)
    .catch(functionToHandleError);
};

const fetchAllWeatherData = (city) => {
  const currentWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d34a16a53b39e4eaf211ff76b0adf70c`;
  fetch(currentWeatherUrl);
  //construct URL for weather URL and store in variable called currentWeatherURL

  const functionForJSON = (responseObject) => {
    if (responseObject.status !== 200) {
      throw new Error("Internal Server Error");
    }
    return responseObject.json();
  };

  const functionForApplication = (dataFromServer) => {
    console.log(dataFromServer);

    renderCurrentCardComponent(); //STUCK HERE!!!

    renderForecastComponents();
    // whatever your application code is goes here
  };
  const functionToHandleError = (errorObject) => {
    // handle your error here according to your application
  };
  fetch(currentWeatherUrl)
    .then(functionForJSON)
    .then(functionForApplication)
    .catch(functionToHandleError);
};

const onLoad = () => {
  //read from local storage and store data in variable called cities from local storage
  //if data is present, call rendercities and pass the data from local storage
  //render cities function (cities from local storage)
  //get the last city name from citiesfromlocalstorage and store in a variable called cityname
  //fetch weather data(city name)
};

const onSubmit = (event) => {
  event.preventDefault();
  const searchedCity = $("#searched-city").val();
  //get city name and store as variable
  const cities = getFromLocalStorage();
  cities.push(searchedCity);
  localStorage.setItem("searched-cities", JSON.stringify(cities));
  renderCitiesFromLocalStorage();
  $("searched-city").val("");

  fetchAllWeatherData(searchedCity);
};

// const onClick = () => {
//   //get city name from the list item that was clicked and store as variable
//   fetchAllWeatherData(cityName);
// };

//need click function for submit button
$("#submit-button").on("click", onSubmit);
// $("#constructed-list-items").click(onClick);
// $(document).ready(onLoad);
