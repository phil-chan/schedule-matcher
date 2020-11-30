import request from "superagent";
import { getAuthorizationHeader } from "authenticare/client";

export function apiAddEvent(event) {
  return request
    .post("/api/v1/events")
    .set(getAuthorizationHeader())
    .send(event)
    .then((res) => {
      return res.body;
    });
}

export function apiGetEventsByUserId(userId) {
  return request
    .get("/api/v1/attendees/user/" + userId)
    .then((res) => res.body);
}

export function apiGetEventById(eventId) {
  return request.get("/api/v1/events/" + eventId).then((res) => res.body);
}

export function apiGetAttendeesByUserId(userId) {
  return request
    .get("/api/v1/attendees/user/" + userId)
    .then((res) => res.body);
}

export function apiCreateAttendee(eventId, userId) {
  return request
    .get("/api/v1/attendees/user//attendees/" + eventId + "/" + userId)
    .then((res) => res.body);
}
