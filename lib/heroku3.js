// dependencies

const internal = require("./internal.js");

// main


// public wrapper class
class heroku_conn {

  constructor (key) {
    this.key = key;
    _acc = new internal.Account(key);
    this.country = _acc.country;
    this.email = _acc.email;
    this.id = _acc.id;
    this.created_at = _acc.created_at;
    this.name = _acc.name;

  }

  apps () {
  }
    


}


module.exports = {
  
  _HKU_URL: HKU_URL,
  _HKU_HEADERS_template: HKU_HEADERS_template,
  heroku_conn: heroku_conn
  

};
