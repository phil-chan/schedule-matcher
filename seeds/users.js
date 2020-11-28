const { generateHash } = require("authenticare/server");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      return Promise.all(
        [
          {
            id: 1,
            username: "phil",
            password: "password",
            email: "filnzl@hotmail.com"
          },
          {
            id: 2,
            username: "bill",
            password: "password",
            email: ""
          },
          {
            id: 3,
            username: "mill",
            password: "password",
            email: ""
          }
        ].map((user) => {
          return generateHash(user.password).then((hash) => {
            user.hash = hash;
            delete user.password;
            return user;
          });
        })
      ).then((users) => {
        return knex("users").insert(users);
      });
    });
};
