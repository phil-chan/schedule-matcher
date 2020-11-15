exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("events").insert([
        {
          id: 1,
          event_name: "tech meet-up",
          event_description: "meet up about careers in tech",
          date_time: new Date("1/1/20"),
        },
        {
          id: 2,
          event_name: "dinner",
          event_description: "dinner with friends at nandos",
          date_time: new Date("2/3/20"),
        },
        {
          id: 3,
          event_name: "coffee",
          event_description: "coffee catch up at starbucks",
          date_time: new Date("4/5/20"),
        },
      ]);
    });
};
