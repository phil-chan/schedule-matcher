exports.up = function (knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("id").primary();
    table.string("event-name");
    table.string("event-description");
    table.datetime("date-time");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("events");
};
