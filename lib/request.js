const https = require('axios');
const HKU_URL = "https://api.heroku.com";
const HKU_HEADERS_template = {
  "Accept": "application/vnd.heroku+json; version=3",
  "Authorization": "Bearer "
};

// For requesting from the Heroku API
// Private class
class HKU {

  constructor (kwargs) {
    this._api_key = kwargs["api_key"];
    this._headers = HKU_HEADERS_template;
    this._headers["Authorization"] = "Bearer " + this.api_key;
    this._hku_url = HKU_URL
  }


  _get (req) {
    axios.get(this._hku_url + "req", {
      headers: headers
    })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return error
      });
  }

  
}

  

  
