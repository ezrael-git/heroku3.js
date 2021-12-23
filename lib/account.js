// account.js
const hk3 = require("./heroku3.js");
const { req } = require("./request.js");

// represents a heroku client account
class Account {

  constructor (key) {
    this._key = key;
    // util instances and variables
    let hk = new req({"api_key":this.key});
    let _acc = hk._get("account");
    
    this.country = _acc.country_of_residence;
    this.email = _acc.email;
    this.id = _acc.id;
    this.created_at = _acc.created_at;
    this.name = _acc.name;
    this.api_key = this._key;

  }
};

module.exports = {
  Account: Account
}
