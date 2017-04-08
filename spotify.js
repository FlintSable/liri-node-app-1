var spotify = require('spotify');
var logger = require('./logger.js');
var openurl = require('openurl');
exports.getSongsInfo = function(songName) {
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
            logger.log('Error occurred: ' + err);
            return;
        }
        var record = data['tracks']['items'][0];
        logger.log("Preview link of the song: " + record['preview_url']);
        openurl.open(record['preview_url']);
        logger.log("Song's name: " + record['name']);
        logger.log("Album name: " + record['album']['name']);
        if (record['artists'].length <= 1) {
            logger.log("Artist: " + record['artists'][0]['name']);
        } else {
            var artists = [];
            record['artists'].forEach(function(data) {
                artists.push(data.name);
            });
            logger.log("Artists: " + artists.join(", "));
        }
    });
}