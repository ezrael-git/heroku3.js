// dependencies

const axios = require('axios');
const fs = require('fs');

// main

const HKU_URL = "https://api.heroku.com/";
const HKU_HEADERS_template = {
  "Accept": "application/vnd.heroku+json; version=3",
  "Authorization": "Bearer "
};


module.exports = {
  
  HKU_URL: HKU_URL
  HKU_HEADERS_template: HKU_HEADERS_template

};
