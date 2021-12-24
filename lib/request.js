const internal = require("./config.js");

// For requesting from the Heroku API
// Private utility class
class Req {

  constructor (kwargs) {
    this._api_key = kwargs["api_key"];
    this._headers = internal.headers;
    this._headers["Authorization"] = "Bearer " + this.api_key;
    this._hku_url = internal.url;
  }

  // generate resource url
  _gen_url (req) {
    return this._hku_url + req
  }

  // send get request
  _get (req) {
    axios.get(this._hku_url + req, {
      headers: this._headers
    })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  }

  
}


module.exports = Req
