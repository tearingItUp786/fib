const Bundler = require("parcel-bundler");
const express = require("express");
const port = process.env.PORT || 8080;
let bundler = new Bundler("./index.html");
let app = express();

app.use(bundler.middleware());
app.listen(port);
