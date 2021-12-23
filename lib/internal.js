// internal.js
// dependency gateway

const axios = require('axios');
const fs = require('fs');

const { Req } = require('./request.js');
const { Account } = require('./account.js');
const { App } = require('./app.js');

const HKU_URL = "https://api.heroku.com/";

const HKU_HEADERS_template = {
  "Accept": "application/vnd.heroku+json; version=3",
  "Authorization": "Bearer "
};


module.exports = {
  axios: axios,
  fs: fs,
  Req: Req,
  Account: Account,
  App: App,
  headers: HKU_HEADERS_template,
  url: HKU_URL
};
