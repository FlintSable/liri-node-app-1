var twitter = require('./twitter.js');
var logger = require('./logger.js');
var spotify = require('./spotify.js');
var movie = require('./imdb.js');
var fs = require('fs');

const MY_TWITTER_NAME = "_rutulpatel";
var inputArr = process.argv.splice(2);
logger.log(inputArr.join(" "), 1);
var option = inputArr[0];
var arg = inputArr.splice(1).join(" ");


function liri(option, arg) {
    switch (option) {
        case 'my-tweets':
            twitter.getTweets(MY_TWITTER_NAME, arg || false);
            break;

        case 'spotify-this-song':
            if (arg) {
                spotify.getSongsInfo(arg);
            } else {
                logger.log("USAGE: You need to enter song name. Syntax: spotify-this-song <song-name>");
            }
            break;

        case 'movie-this':
            if (arg) {
                movie.getMovies(arg);
            } else {
                logger.log("USAGE: You need to enter movie name. Syntax: movie-this <movie-name>");
            }
            break;

        case 'do-what-it-says':
            fs.readFile('random.txt', 'utf8', function(err, data) {
                if (err) {
                    logger.log(err);
                } else {
                    var commandsArr = data.split("\n");
                    commandsArr.forEach(function(command) {
                        liri(command.split(",")[0], command.split(",").slice(1).join(" "));
                    });

                }
            });
            break;

        case '--help':
            help();
            break;

        default:
            if (arg) {
                logger.log("I see what you did, but we dont have that functionality added yet...");
            } else {
                logger.log("Type '--help' argument to see what i can do.");
            }
            break;
    }
}

function help() {
    var helpMsg = "\nUsage: node liri.js [options] [arguments]\n\n" +
        "options\t\t\t arguments\t\t\t description\n" +
        "my-tweets\t\t <OPTIONAL: number of tweets>\t Loads last 20 tweets from your twitter if optional arg is not setup.\n" +
        "spotify-this-song\t <songs name>\t\t\t Shows songs description from spotify and plays a preview version in browser for the song that was searched. \n" +
        "movie-this\t\t <movie name>\t\t\t Shows description of the movie that was searched. \n" +
        "do-what-it-says\t\t <no arg needed> \t\t Runs commands from random.txt file in sequence (*new command on new line).\n";
    console.log(helpMsg);
}

//start the app
liri(option, arg);