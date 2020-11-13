const express = require("express");
const db = require("../db/index");
const router = express.Router();

//events
router.post("/events", (req, res) => {
  db.createEvent(req.body).then((data) => res.json(data));
});

router.get("/events/:id", (req, res) => {
  db.recieveEventById(req.params.id).then((data) => res.json(data));
});

router.patch("/events/:id", (req, res) => {
  db.updateEvent(req.body, req.params.id).then((data) => res.json(data));
});

router.delete("/events/:id", (req, res) => {
  db.deleteEvent(req.params.id).then((data) => res.json(data));
});

//users
router.post("/users", (req, res) => {
  db.createUser(req.body).then((data) => res.json(data));
});

router.get("/users/:id", (req, res) => {
  db.recieveUserById(req.params.id).then((data) => res.json(data));
});

router.patch("/users/:id", (req, res) => {
  db.updateUser(req.body, req.params.id).then((data) => res.json(data));
});

router.delete("/users/:id", (req, res) => {
  db.deleteUser(req.params.id).then((data) => res.json(data));
});

//attendees
router.get("/attendees", (req, res) => {
  db.getAllAttendees().then((data) => res.json(data));
});

router.get("/attendees/user/:userId", (req, res) => {
  db.getAttendeesById(req.params.userId).then((data) => res.json(data));
});

router.get("/attendees/event/:eventId", (req, res) => {
  db.getAttendeesByEventId(req.params.eventId).then((data) => res.json(data));
});

router.post("/attendees/:eventId/:userId", (req, res) => {
  db.createAttendee(req.params.eventId, req.params.userId).then((data) =>
    res.json(data)
  );
});

router.delete("/attendees/:eventId/:userId", (req, res) => {
  db.deleteAttendee(req.params.eventId, req.params.userId).then((data) =>
    res.json(data)
  );
});

module.exports = router;
