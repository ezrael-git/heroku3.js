// internal.js
// dependency gateway

const axios = require('axios');
const fs = require('fs');

const { Req } = require('./request.js');
const { Account } = require('./account.js');
const { App } = require('./app.js');



module.exports = {
  axios: axios,
  fs: fs,
  Req: Req,
  Account: Account,
  App: App,
};
