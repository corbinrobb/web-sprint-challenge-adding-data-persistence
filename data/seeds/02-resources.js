
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: "Computer", description: "Laptop computer" },
        { name: "Room", description: "Its a room" },
        { name: "Devon", description: "A great coder" },
        { name: "Sally", description: "Great Coder" }
      ]);
    });
};
