
exports.up = function(knex) {
    return knex.schema.createTable('game', function (table) {
        table.increments('game_id').primary();
        table.string('name');
        table.string('developer_name');
        table.string('genre');
        table.string('recent_reviews');
        table.string('popular_tags');
        
    });
}

exports.down = function(knex) {
    return knex.schema.dropTable('game');
};
