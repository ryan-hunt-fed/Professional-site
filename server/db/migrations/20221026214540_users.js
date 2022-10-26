
 exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id')
      table.string('username')
      table.string('hash')
      table.string('email_address')
      table.timestamp(true, true)
    })
  
  };
  

  exports.down = function (knex) {
    return knex.schema.dropTable('users')
  };