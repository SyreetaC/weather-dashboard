//need click function for submit button
//need function for requesting both current weather and 5 day weather.- both with a url passed in
//handle errors function
//function for JSON
const requestServerData = () => {
  const functionForJSON = (responseObject) => {
    if (responseObject.status !== 200) {
      throw new Error("Internal Server Error");
    }
    return responseObject.json();
    // unless you have some logic here do that before you return
  };
  const functionForApplication = (dataFromServer) => {
    console.log(dataFromServer);
    // whatever your application code is goes here
  };
  const functionToHandleError = (errorObject) => {
    console.log("Something went wrong");
    // handle your error here according to your application
  };
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid=d34a16a53b39e4eaf211ff76b0adf70c"
  )
    .then(functionForJSON)
    .then(functionForApplication)
    .catch(functionToHandleError);
};

const requestCurrentWeather = () => {
  const currentWeatherURL =
    "http://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=d34a16a53b39e4eaf211ff76b0adf70c";
  requestServerData();
};

$(document).ready(requestServerData);
