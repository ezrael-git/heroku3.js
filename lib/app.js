// app.js
HKU = require("./request.js");

// represents a heroku app
class App {

  constructor (key,name) {
    hk = HKU({"api_key":key});
    _app = hk.get("apps/" + name);

    this.id = _app.id;
    this.name = _app.name;
    this.created_at = _app.created_at;
  }

};
