const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response, client) => {
  const { address, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const locationMock = locationsMock[address.toLowerCase()];
    return response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((error) => {
      response.status(400);
      return response.send(error.response.data.error_message);
    });
};
