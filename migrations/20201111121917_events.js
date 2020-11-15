exports.up = function (knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("id").primary();
    table.string("event_name");
    table.string("event_description");
    table.datetime("date_time");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("events");
};
