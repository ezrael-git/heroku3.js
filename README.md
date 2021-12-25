# heroku3.js
A wrapper in JavaScript for the Heroku API V3.
The Heroku REST API allows Heroku users to manage their accounts, applications, addons, and other aspects related to Heroku. It allows you to easily utilize the Heroku platform from your applications.

# Introduction
First instantiate a heroku_conn as below:
```js
heroku_conn = require("./heroku3.js");
heroku = heroku_conn.build('YOUR_API_KEY');
```
Interact with your applications:
```js
>>> heroku_conn.apps();
[ {name: "sharp-night-770", ...}, {name: "handsome-hand-190", ...}, ...]

>>> app = heroku_conn.get_app("sharp-night-770");
//or
>>> app = heroku_conn.apps[0];
```

## Examples
List all apps in name order:
```js
apps = heroku_conn.apps("name");
```
Restart an app's Dyno:
```js
app.dynos()[0].restart();
```


# Account
Get account:
```js
account = heroku_conn.account();
```
Change password:
```js
await account.change_password('CURRENT_PASSWORD', 'NEW_PASSWORD');
```

# App
List all apps:
```js
await heroku_conn.apps();
```
Get an app:
```js
let app = await heroku_conn.get_app('stark-night-1770');
```
Delete an app:
```js
// warning: this is irreversible
await app.delete();
```

# Dyno
List all dynos:
```js
await app.dynos();
```
Get a specific dyno from name:
```js
let dyno = await app.get_dyno('worker.1');
```
Kill a dyno:
```js
await dyno.kill();
```
Restart a dyno:
```js
await dyno.restart();
```
