/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 const { generateHash } = require('authenticare/server')


 const replacePasswordWithHash = (user) => {
   const { username, email_address } = user
   return generateHash(user.password).then((hash) => {
     return {
       username,
       email_address,
       hash
     }
   })
 }
 
 const fakeUserData = [
   {
     username: 'hunt-admin',
     password: 'Spectre2186',
     email_address: 'rhuntwd@gmail.com'
 
   },
 ]
 
 
 const fakeUsers = Promise.all(fakeUserData.map(replacePasswordWithHash))
 
 exports.seed = (knex) => {
   return knex('users')
     .del()
     .then(() => fakeUsers)
 
     .then((users) => {
       return knex('users').insert(users, 'id')
     })
 }
