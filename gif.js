const gifUrl =
  "https://api.giphy.com/v1/gifs/random?api_key=lxW3Ndk053twgNZ0HIpL4Mccffz2HPAI&tag=";

const gifUISuccess = function (data) {
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  const orginalUrl = parsedData.data.images.original.url;

  document.querySelector("#dom").innerHTML = "Today is " + dayOfWeek();

  let gif = document.createElement("img");
  gif.setAttribute("src", orginalUrl);
  document.body.appendChild(gif);
};

const responseMethod = function (httpRequest) {
  if (httpRequest.readyState === 4) {
    gifUISuccess(httpRequest.responseText);
  }
};

function createRequest(url) {
  const httpRequest = new XMLHttpRequest(url);
  httpRequest.addEventListener("readystatechange", (url) =>
    responseMethod(httpRequest)
  );
  httpRequest.open("GET", url);
  httpRequest.send();
}

const dayOfWeek = function () {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let today = new Date();
  let day = days[today.getDay()];
  return day;
};

createRequest(gifUrl + dayOfWeek());
