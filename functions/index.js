const functions = require("firebase-functions");
const express = require("express");
const placeRouter = require("./api/controller/place_controller");
const categoryRouter = require("./api/controller/category_controller");

const app = express();

//
app.use(express.json());
app.use("/places", placeRouter);
app.use("/categories", categoryRouter);

exports.api = functions.https.onRequest(app);

exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});
