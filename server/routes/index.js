const express = require("express");
const db = require("../db/index");
const router = express.Router();

//events
router.post("/", (req, res) => {
  db.createEvent(req.body).then((data) => res.json(data));
});

router.get("/", (req, res) => {
  db.recieveEventById(req.params.id).then((data) => res.json(data));
});

router.patch("/", (req, res) => {
  db.updateEvent(req.body, req.params.id).then((data) => res.json(data));
});

router.delete("/", (req, res) => {
  db.deleteEvent(req.params.id).then((data) => res.json(data));
});

//users
router.post("/", (req, res) => {
  db.createUser(req.body).then((data) => res.json(data));
});

router.get("/", (req, res) => {
  db.recieveUserById(req.params.id).then((data) => res.json(data));
});

router.patch("/", (req, res) => {
  db.updateUser(req.body, req.params.id).then((data) => res.json(data));
});

router.delete("/", (req, res) => {
  db.deleteUser(req.params.id).then((data) => res.json(data));
});

//attendees
router.post("/", (req, res) => {
  db.createAttendee(req.body).then((data) => res.json(data));
});
router.delete("/", (req, res) => {
  db.deleteAttendee(req.params.id).then((data) => res.json(data));
});

module.exports = router;
