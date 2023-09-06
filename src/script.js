function displayLosAngelesTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
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

function dipslayNewYorkTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");

  let newYorkDate = moment().tz("America/New_York").format("MMM Do, YYYY");
  let newYorkTime = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");

  newYorkDateElement.innerHTML = newYorkDate;
  newYorkTimeElement.innerHTML = newYorkTime;
}

displayLosAngelesTime();
dipslayNewYorkTime();

setInterval(displayLosAngelesTime, 1000);
setInterval(dipslayNewYorkTime, 1000);
