
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        {
          name: 'DayZ', 
          developer_name: 'Boehmia Interactive',
          recent_reviews: 'Mixed',
          popular_tags: 'Survival, Zombies, OpenWorld, Multiplayer',
          genre: 'Action, Adventure, MMO'
        },
        {
          name: 'Ni no Kuni II', 
          developer_name: 'Level-5',
          recent_reviews: 'Mostly Positive',
          popular_tags: 'RPG, JRPG, Anime, Adventure, Singleplayer, Open World, Fantasy',
          genre: 'Adventure, RPG'
        },
        {
          name: 'Stardew Valley', 
          developer_name: 'Concerned Ape',
          recent_reviews: 'Very positive',
          popular_tags: 'RPG, Pixel Graphics, Agriculture, Simulation, Relaxing, Crafting, Multiplayer',
          genre: 'Indie, RPG, Simulation'
        },
      ]);
    });
};
