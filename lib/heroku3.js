// dependencies

const axios = require('axios');
const fs = require('fs');
const request = require('./request.js');
const { Account } = require('./account.js');
const app = require('./app.js');

// main

const HKU_URL = "https://api.heroku.com/";
const HKU_HEADERS_template = {
  "Accept": "application/vnd.heroku+json; version=3",
  "Authorization": "Bearer "
};

// public wrapper class
class heroku_conn {

  constructor (key) {
    this.key = key;
    _acc = Account(key);
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
