// heroku3.js

// Wrapper class
// Public class
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
