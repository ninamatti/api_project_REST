# api_project_REST

This project was created during my time as a student at Code Chrysalis

+++++++++++++++++++++++

## Game Searcher REST API

This API serves the following endpoints:



1) GET /gamesearcher/

-> serves a list of all games in the database


2) GET /gamesearcher/:gamename

-> serves all info on a game with a certain name


3) GET /gamesearcher/genres/:genrename

-> serves a list of all games for a certain genre


4) GET /gamesearcher/developers/:developername

 -> Serves a list of all games published by a certain developer


5) POST /gamesearcher/:gamename/:developer_name/:genre

-> creates a new game entry with the three given parameters


6) PATCH /gamesearcher/:gamename/:newgamename

-> Updates the name of a game with a new name


7) DELETE /gamesearcher/:gamename

-> Deletes a game with the given name


For now, these are all the requests possible. 

If there are any questions, don't hesitate to contact me!






