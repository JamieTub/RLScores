import { WebScraper } from './models/webscraper';
import { Player } from './models/player';

//setup express
const express = require('express');
const app = new express();

//import webscraper
const scraper = new WebScraper();
const player = new Player('https://liquipedia.net/rocketleague/AYYJAYY');

//routes
app.get('/', (req, res) => {
    res.send(player.model);  
});

//start server
console.log("app started on localhost:4200, ctrl+c to exit")
app.listen(4200);