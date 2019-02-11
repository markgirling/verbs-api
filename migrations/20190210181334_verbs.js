
exports.up = function(knex, Promise) {
  return knex.schema.createTable('verbs', function (table) {
    table.increments();
    table.string('infinitive', 255).notNullable();
    table.string('translation', 255).notNullable();
    table.string('present_participle', 255);
    table.string('past_participle', 255);

    table.unique('infinitive');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('verbs');
};
