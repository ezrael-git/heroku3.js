// dyno.js
const Req = require("../request.js");



// represents an app's dyno
class Dyno {

  constructor (key,name,id,app_name,created_at,state,raw) {

    this.key = key;
    this.name = name;
    this.id = id;
    this.app_name = app_name;
    this.created_at = created_at;
    this.state = state;
    this.raw = raw;

  }

  // builder method, not necessary
  // identifiers can be either names or ids
  static async build (key,app_identifier,dyno_identifier) {
    const r = Req({"api_key":key});
    let raw = await r._get("apps/" + app_identifier + "/dynos/" + dyno_identifier);
    
    return new Dyno(key,raw.name,raw.id,raw.app.name,raw.created_at,raw.state,raw);
  }


  async restart () {
    const r = Req({"api_key":this.key});

    let response = await r._get("apps/" + this.app_name + "/dynos/" + this.name);

    if (response.status == 200) {
      return true;

    } else {
      return false;

    }

  }

}



module.exports = Dyno
