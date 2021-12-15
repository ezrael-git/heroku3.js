// heroku3.js
const HKU = require("./request.js");
const App = require("./app.js");
const Account = require("./account.js");

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
