// heroku3.js
HKU = require("./request.js");
App = require("./app.js");
Account = require("./account.js");

// Public wrapper class
// Bundles everything into one class
class heroku3 {

  constructor (api_key) {
    this.api_key = api_key;
    this._hku = new HKU( {"api_key": this.api_key} );
    this.account = new Account(api_key);
  }

  // returns list of apps
  apps () {
    return this.account.apps;
  }





};
