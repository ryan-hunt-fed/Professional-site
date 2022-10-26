
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('blog').del()
  await knex('blog').insert([
    {id: 1, title: 'New Journeys', summary:'Begining of my Professional Web Journey' , post:'As I have just finished my studies at Dev Academy, I am now looking for work and ideally looking to learn some other skills that were not taught, first being three.js as that has some significance to my previous asperations of 3D art. Overall I am hoping to bring these two skillsets together and get to a more satisfying career.' },
  ]);
};
