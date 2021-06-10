const { table } = require("console");
exports.up = function(knex) {
    return knex.schema.createTable('person',table => {
        table.increment('id');
        table.string('email').notNullable().unique();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.timestamps(true,true);
    
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('person');
};