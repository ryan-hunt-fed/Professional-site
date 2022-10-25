
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('blog').del()
  await knex('blog').insert([
    {id: 1, title: 'Post One', summary:'testing post' , post:'This is a test to make sure the blog post appears' },
    {id: 2, title: 'Post Two', summary:'testing post' , post:'This is a test to make sure the blog post appears' },
  ]);
};
