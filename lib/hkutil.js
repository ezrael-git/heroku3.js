const Req = require("./request.js");


class HKutil {

  constructor (key) {
    this.req = Req({api_key:key});
    this.get = this.req._get();
  }



  static async get_dynos (app) {
    return await this.get("/apps" + app + "/dynos/");
  }








}
