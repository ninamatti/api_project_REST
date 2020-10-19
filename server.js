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

// check if we can acces user data
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
app.use(express.static("./"));

app.get("/hello", (req, res) => {
    res.send("Hello world!");
});

app.get("/gamesearcher", async (req, res) => {
    knex
    .from('game')
    .select()
    .then((data) => {
    console.log(data);
    res.send(data);
    })
    
});

app.get("/gamesearcher/:gamename", (req, res) => {
    // const name = req.params.gamename;
    // const result = [];
    // for(let game of games) {
    //     if(game.name === name) {
    //         result.push(game);
    //     }
    // }
    // res.send(result);
});


app.post("/gamesearcher/:gamename", (req, res) => {
    // const id = req.params.id;
    // const name = req.params.name;
    // pokeData.pokemon.push({ id, name }); //the array
    // res.sendStatus(201);
});

app.patch("/gamesearcher/:gamename", (req, res) => {
    
    
    // let Index = 0;
    // const { name } = req.query;
    // if (Number(req.params.identifier)) {
    //   const id = Number(req.params.idOrName);
    //   for (const [index, value] of pokeData.pokemon.entries()) {
    //     if (Number(value.id) === id) Index = index;
    //   }
    // } else {
    //   const name = req.params.idOrName;
    //   for (const [index, value] of pokeData.pokemon.entries()) {
    //     if (value.name === name) Index = index;
    //   }
    // }
    // pokeData.pokemon[Index].name = name;
    // res.send(pokeData.pokemon[Index]);
});  


app.delete("/gamesearcher/:gamename", (req, res) => {
    knex('game')
    .where({ name: req.params.gamename })
    .del();
});


app.listen(5000, () => {
    console.log('Listening! @5000');
});
