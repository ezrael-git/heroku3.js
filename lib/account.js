// account.js
const Req = require("./request.js");

// represents a heroku client account
class Account {

  constructor (country,email,id,ca,name,key) {
    this.country = country;
    this.email = email;
    this.id = id;
    this.created_at = ca;
    this.name = name;
    this.key = key;
  }

  static async build (key) {
    let _key = key;
    // util instances and variables
    let hk = new Req({"api_key":_key});
    let _acc = await hk._get("account");
    console.log(_acc);
    
    country = _acc.country_of_residence;
    email = _acc.email;
    id = _acc.id;
    created_at = _acc.created_at;
    name = _acc.name;
    api_key = _key;
    return new Account(country,email,id,created_at,name,api_key);
  }

  
};

module.exports = Account
