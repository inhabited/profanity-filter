const prompt = require('prompt-sync')();
const getLyrics = require("genius-lyrics-api").getLyrics;
const getSong = require("genius-lyrics-api").getSong;
require('dotenv').config();

var title = prompt('What is the title: ');
var artist = prompt('Who is the artist: ');
var phrase = prompt('What is the blacklisted phrase: ');

var options = {
	apiKey: process.env.GENIUS_API_KEY,
	title: title,
	artist: artist,
	optimizeQuery: true
};

function search_word(text, word){
    var x = 0, y=0;
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}

function geniusLyrics() {
    getSong(options).then((song) => console.log(`${song.lyrics}`));
}

function stringMatch() {
    getSong(options).then((song) => console.log(search_word(`${song.lyrics}`, phrase)));
}

geniusLyrics();
setTimeout(stringMatch, 1000);