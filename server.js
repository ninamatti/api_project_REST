// give knex the database credentials (config object)
const knex = require('knex')({
    client: 'postgres',
    // this is the connection object:
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'bekind',
      database : 'api_solo'
    }
});

//const knex = require("./knexfile");

// define games data
const games = knex
    .select()
    .table('game')
    .then((rows) => {
    console.log(rows);
});

console.log(games);

const express = require("express");
const app = express();

// middleware: app.use!
app.use(express.static("./client"));

app.get("/gamesearcher", async (req, res) => {
    knex
    .from('game')
    .select()
    .then((data) => {
    res.send(data);
    })
});

app.get("/gamesearcher/:gamename", (req, res) => {
    knex
    .from('game')
    .select()
    .where({ name: req.params.gamename})
    .then((data) => {
        res.send(data);
    })
});

app.get("/gamesearcher/genres/:genrename", async (req, res) => {
    knex
    .from('game')
    .select()
    .then((data) => {
        return data.filter((game) => {
            return game.genre.includes(req.params.genrename);
        })
    })
    .then((genregames) => {
        res.send(genregames);
    }) 
});

app.get("/gamesearcher/developers/:developername", async (req, res) => {
    knex
    .from('game')
    .select()
    .then((data) => {
        return data.filter((game) => {
            return game.developer_name.includes(req.params.developername);
        })
    })
    .then((devgames) => {
        res.send(devgames);
    }) 
});

app.post("/gamesearcher/:gamename/:developer_name/:genre", async (req, res) => {
    const developer = req.params.developer_name;
    const name = req.params.gamename;
    const genre = req.params.genre;
    knex('game')
        .insert({ 
            name: name,
            developer_name: developer,
            genre: genre 
        })
        .then(() => {
            console.log('added new game!');
            res.sendStatus(201);
        })
});

app.patch("/gamesearcher/:gamename/:newgamename", async (req, res) => {
    knex('game')
        .where({ name: req.params.gamename })
        .update({ name: req.params.newgamename })
        .then(() => {
            res.sendStatus(200);
        })
});  


app.delete("/gamesearcher/:gamename", async (req, res) => {
    knex('game')
    .where({ name: req.params.gamename })
    .del()
    .then((data) => {
        res.sendStatus(200)
    })
    
});


app.listen(5000, () => {
    console.log('Listening! @5000');
});
