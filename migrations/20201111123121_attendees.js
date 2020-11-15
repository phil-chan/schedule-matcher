exports.up = function (knex) {
  return knex.schema.createTable("attendees", (table) => {
    table.integer("event_id");
    table.integer("user_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("attendees");
};
