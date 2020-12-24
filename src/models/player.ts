import { response } from 'express';
import { WebScraper } from './webscraper';
import cheerio from 'cheerio';

export class Player {
    scraper = new WebScraper();
    playerURL: string;

    model = {
        FirstName: '',
        LastName: '',
        Country: '',
        Team: ''
    }

    constructor(playerURL: string) {
        this.playerURL = playerURL;
        this.getPlayerDetails()
    }

    getPlayerDetails() {
        this.scraper.getPage(this.playerURL).then(page => {
            const html = page.data;
            const $ = cheerio.load(html)
            const playerTable = $('fo-nttax-infobox-wrapper infobox-rocket');
            playerTable.each((i, e) => {
                this.model.FirstName = $(e).find('Name:').text();
            });
        }).catch(err => {
            console.log(err);
        })
    }
}