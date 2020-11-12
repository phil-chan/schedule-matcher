const connection = require("./connection");

function generateEvent(eventDetails, db = connection) {
  let newEvent = eventDetails;
  return db("events").insert(newEvent);
}

module.exports = { generateEvent };
