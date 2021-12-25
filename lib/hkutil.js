const Req = require("./request.js");


class HKutil {

  constructor (key) {
    this.req = Req({api_key:key});
    this.get = this.req._get();
  }



  static async layer_app (app) {
    let l = await this.get("/apps" + app + "/dynos/");
    app.dynos = l;
    return app;
  }








}




module.exports = HKutil
