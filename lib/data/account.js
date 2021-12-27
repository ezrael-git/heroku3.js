// account.js

const Req = require("../request.js");




// represents a heroku account
class Account {

  constructor (key,raw) {

    this.raw = raw;
    this.name = raw.name;
    this.email = raw.email;
    this.id = raw.id;
    this.created_at = raw.created_at;

    this.key = key;


  }

  static async build (key) {
    let r = Req({"api_key":key});
    let account = await r._get("account");

    return new Account(key,account);
  }



  // deletes account, warning: this is irreversible
  async delete () {
    let r = Req({"api_key":key});
    let st = await r._delete("account");

    if (st.status == 200) {
      return true;
    };
    else {
      return false;
    };

  }









}
