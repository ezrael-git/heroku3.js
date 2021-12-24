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
    let country = _acc.country;
    let email = _acc.email;
    let id = _acc.id;
    let created_at = _acc.created_at;
    let name = _acc.name;
    return new heroku_conn(key,country,email,id,created_at,name);

  }



}


module.exports = heroku_conn
