"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send('Express hello!');
});
app.get('/hello', (req, res) => {
    res.send('Techtrain hello from custom express app!');
});
exports.helloTechTrain = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map