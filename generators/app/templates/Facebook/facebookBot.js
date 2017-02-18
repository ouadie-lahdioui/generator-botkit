require('dotenv').config({path: __dirname + '/.env'});

if (!process.env.page_token) {
  console.log('Error: Specify page_token in environment');
  process.exit(1);
}

if (!process.env.verify_token) {
  console.log('Error: Specify verify_token in environment');
  process.exit(1);
}

if (!process.env.app_secret) {
  console.log('Error: Specify app_secret in environment');
  process.exit(1);
}

const Botkit = require('botkit');
const debug = require('debug')('botkit:main');

const controller = Botkit.facebookbot({
  debug: true,
  receive_via_postback: true,
  verify_token: process.env.verify_token,
  access_token: process.env.page_token
});

// Set up an Express-powered webserver to expose oauth and webhook endpoints
let webserver = require(__dirname + '/components/expressWebserver.js')(controller);

// Tell Facebook to start sending events to this application
require(__dirname + '/components/subscribeEvents.js')(controller);

// Set up Facebook "thread settings" such as get started button, persistent menu
require(__dirname + '/components/threadSettings.js')(controller);

// Send an onboarding message when a user activates the bot
require(__dirname + '/components/onboarding.js')(controller);

let normalizedPath = require("path").join(__dirname, "skills");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./skills/" + file)(controller);
});
