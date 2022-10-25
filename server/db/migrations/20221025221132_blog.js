
exports.up = function(knex) {
  return knex.schema.createTable('blog', (table) => {
    table.increments('id')
    table.string('title')
    table.string('summary')
    table.string('post')
    

  })
};


exports.down = function(knex) {
    return knex.schema.dropTable('blog')
};
