// internal.js
// dependency gateway

const axios = require('axios');
const fs = require('fs');
const request = require('./request.js');
const { Account } = require('./account.js');
const { App } = require('./app.js');


module.exports = {
  axios: axios,
  fs: fs,
  request: Req,
  Account: Account,
  App: App
};
