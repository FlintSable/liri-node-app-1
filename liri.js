var twitter = require('./twitter.js');
var spotify = require('./spotify.js');
var movie = require('./imdb.js');
var fs = require('fs');

const MY_TWITTER_NAME = "_rutulpatel";

var inputArr = process.argv.splice(2);

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
                console.log("USAGE: You need to enter song name. Syntax: spotify-this-song <song-name>");
            }
            break;

        case 'movie-this':
            if (arg) {
                movie.getMovies(arg);
            } else {
                console.log("USAGE: You need to enter movie name. Syntax: movie-this <movie-name>");
            }
            break;

        case 'do-what-it-says':
            fs.readFile('random.txt', 'utf8', function(err, data) {
                if (err) {
                    console.log(err);
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
                console.log("I see what you did, but we dont have that functionality added yet...");
            } else {
                console.log("Type '--help' argument to see what i can do.");
            }
            break;
    }
}

function help() {
    var helpMsg = "\nUsage: node liri.js [options] [arguments]\n\n" +
        "options\t\t\t arguments\n" +
        "my-tweets\t\t <number of tweets to load>\n" +
        "spotify-this-song\t <songs name>\n";
    console.log(helpMsg);
}


//start the app
liri(option, arg);