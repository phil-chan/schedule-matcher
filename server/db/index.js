const connection = require("./connection");

function createEvent(eventDetails, db = connection) {
  // {
  //     id: 2,
  //     event_name: "dinner",
  //     event_description: "dinner with friends at nandos",
  //     date_time: new Date("2/3/20"),
  //   },
  return db("events").insert(eventDetails);
}

function createUser(userDetails, db = connection) {
  //{ id: 1, username: "phil", email: "filnzl@hotmail.com" },
  return db("user").insert(userDetails);
}

function joinEvent(userId, eventId, db = connection) {
  //{ event_id: 1, user_id: 1 }
  let newAttendee = { event_id: eventId, user_id: userId };
  return db("attendees").insert(newAttendee);
}

function getEventById(eventId, db = connection) {
  return db("events").where("id", eventId);
}

function editEvent(newDetails, eventId, db = connection) {
  return db("events").where("id", eventId).update(newDetails);
}

module.exports = {
  createEvent,
  createUser,
  joinEvent,
  getEventById,
  editEvent,
};
