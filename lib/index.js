// dependencies

const https = require('axios');
const HKU_URL = "https://api.heroku.com/";
const HKU_HEADERS_template = {
  "Accept": "application/vnd.heroku+json; version=3",
  "Authorization": "Bearer "
};


// linker

const link = (filename) => {
  axios.get("https://raw.githubusercontent.com/ezrael-git/heroku3.js/development/lib/" + filename)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
