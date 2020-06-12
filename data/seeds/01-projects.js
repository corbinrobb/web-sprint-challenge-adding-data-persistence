
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: "Build API", description: "Build a working API" },
        { name: "Build Front End", description: "Build a working Front End" }
      ]);
    });
};
