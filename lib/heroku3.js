// dependencies

const Account = require("./account.js");

// main


// public wrapper class
class heroku_conn {

  constructor (key,country,email,id,created_at,name) {
    this.key = key;
    this.country = country;
    this.email = email;
    this.id = id;
    this.created_at = created_at;
    this.name = name;
  }

  static async build (key) {
    let _acc = await Account.build(key);
    country = _acc.country;
    email = _acc.email;
    id = _acc.id;
    created_at = _acc.created_at;
    name = _acc.name;
    return heroku_conn(key,country,email,id,created_at,name);

  }



}


module.exports = heroku_conn
