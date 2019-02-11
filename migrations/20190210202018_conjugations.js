
exports.up = function(knex, Promise) {
  return knex.schema.createTable('conjugations', function (table) {
    table.increments();

    table.string('conjugation', 255).notNullable();
    table.string('tense', 255).notNullable();
    table.string('person', 255).notNullable();
    table.string('mood', 255).notNullable();
    table.integer('verb_id').unsigned();
    table.foreign('verb_id').references('verbs.id').onDelete('CASCADE').onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('conjugations');
};
