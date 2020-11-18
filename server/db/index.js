const connection = require("./connection");

function createEvent(eventDetails, db = connection) {
  return db("events").insert(eventDetails);
}

function recieveEventById(eventId, db = connection) {
  return db("events").where("id", eventId);
}

function updateEvent(newDetails, eventId, db = connection) {
  return db("events").where("id", eventId).update(newDetails);
}

function deleteEvent(eventId, db = connection) {
  return db("events").where("id", eventId).del();
}

function createUser(userDetails, db = connection) {
  return db("users").insert(userDetails);
}

function recieveUserById(userId, db = connection) {
  return db("users").where("id", userId);
}

function updateUser(newDetails, userId, db = connection) {
  return db("users").where("id", userId).update(newDetails);
}

function deleteUser(userId, db = connection) {
  return db("users").where("id", userId).del();
}

function getAllAttendees(db = connection) {
  return db("attendees").select();
}

function getAttendeesById(userId, db = connection) {
  return db("attendees").where("user_id", userId);
}

function getAttendeesByEventId(eventId, db = connection) {  
  return db("attendees").where("event_id", eventId);
}

function createAttendee(eventId, userId, db = connection) {
  let newAttendee = { event_id: eventId, user_id: userId };
  return db("attendees").insert(newAttendee);
}

function deleteAttendee(eventId, userId, db = connection) {
  return db("attendees").where({user_id: userId, event_id: eventId}).del();
}

module.exports = {
  createEvent,
  recieveEventById,
  updateEvent,
  deleteEvent,
  createUser,
  recieveUserById,
  updateUser,
  deleteUser,
  getAttendeesById,
  createAttendee,
  deleteAttendee,
  getAllAttendees,
  getAttendeesByEventId,
};
