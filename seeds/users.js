exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "phil", email: "filnzl@hotmail.com" },
        { id: 2, username: "peter", email: "" },
        { id: 3, username: "ponyboy", email: "" },
      ]);
    });
};
