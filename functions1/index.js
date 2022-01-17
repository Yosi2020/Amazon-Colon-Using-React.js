const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KIeFTGYt3A1b41I2aMaMQYTEA9Jw2czhCjYtyz4ySNDEzDSuGDCENn0qXlhYyNMuPe54TbbVSkNMQNZl9fXiy4c00BqgAPZKA");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;