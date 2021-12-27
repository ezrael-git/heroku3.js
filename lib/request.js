const internal = require("./config.js");
const axios = require("axios");

// For requesting from the Heroku API
// Private utility class
class Req {

  constructor (kwargs) {
    this._api_key = kwargs["api_key"];
    this._headers = internal.headers;
    this._headers["Authorization"] = "Bearer " + this._api_key;
    this._hku_url = internal.url;
  }

  // generate resource url
  _gen_url (req) {
    return this._hku_url + req
  }

  // send get request
  async _get (req) {
    let res = await axios.get(this._hku_url + req, {
      headers: this._headers
    })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });

    return res.data;
  }

  async _delete (req) {
    let res = await axios.delete(this._hku_url + req, {
      headers: this._headers
    })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });

    return res.data;
  }

  async _post (req) {
    let res = await axios.post(this._hku_url + req, {
      headers: this._headers
    })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });

    return res.data;
  }


  
}


module.exports = Req
