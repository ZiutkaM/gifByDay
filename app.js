//this file is not working, I was just testing fetch
const gifUrl =
  "api.giphy.com/v1/gifs/random?api_key=lxW3Ndk053twgNZ0HIpL4Mccffz2HPAI";

const gifUISuccess = function (parsedData) {
  //const parsedData = JSON.parse(data);
  console.log(parsedData);
};

const handleError = function (response) {
  if (!response.ok) {
    throw response.status + ": " + response.statusText;
  }
  return response.json();
};

const createRequest = function (url, succeed) {
  fetch(url)
    .then((response) => handleError(response))
    .then((data) => succeed(data))
    .catch((error) => fail(error));
};

createRequest(gifUrl, gifUISuccess);
