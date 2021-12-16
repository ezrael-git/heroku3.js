

// For requesting from the Heroku API
// Private utility class
class HKU {

  constructor (kwargs) {
    this._api_key = kwargs["api_key"];
    this._headers = HKU_HEADERS_template;
    this._headers["Authorization"] = "Bearer " + this.api_key;
    this._hku_url = HKU_URL
  }

  // generate resource url
  _gen_url (req) {
    return this._hku_url + req

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
