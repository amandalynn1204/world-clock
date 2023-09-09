function displayLosAngelesTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesDate = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do, YYYY");
    let losAngelesTime = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");

    losAngelesDateElement.innerHTML = losAngelesDate;
    losAngelesTimeElement.innerHTML = losAngelesTime;
  }
}

function dipslayNewYorkTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");

    let newYorkDate = moment().tz("America/New_York").format("MMMM Do, YYYY");
    let newYorkTime = moment()
      .tz("America/New_York")
      .format("h:mm:ss [<small>]A[</small>]");

    newYorkDateElement.innerHTML = newYorkDate;
    newYorkTimeElement.innerHTML = newYorkTime;
  }
}

function updateCity(event) {
  let cityContainerElement = document.querySelector("#city-container");
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do, YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");

  if (event.target.value.length > 0) {
    cityContainerElement.innerHTML = `<div class="city-info">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityDate}</div>
        </div>
        <div class="time">${cityTime}</div>
        
      </div>
      <a href="" onclick="location.reload()" class="reload-link">Back to home</a>`;
  }
}

let citySelectorElement = document.querySelector("#cities");
citySelectorElement.addEventListener("change", updateCity);

displayLosAngelesTime();
dipslayNewYorkTime();
setInterval(displayLosAngelesTime, 1000);
setInterval(dipslayNewYorkTime, 1000);
