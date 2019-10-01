const Bundler = require("parcel-bundler");
const express = require("express");

let bundler = new Bundler("./index.html");
let app = express();

app.use(bundler.middleware());
app.listen(5000);
