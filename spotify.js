var spotify = require('spotify');

exports.getSongsInfo = function(songName) {
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        var record = data['tracks']['items'][0];
        console.log("Preview link of the song: ", record['preview_url']);
        console.log("Song's name: ", record['name']);
        console.log("Album name: ", record['album']['name']);
        if (record['artists'].length <= 1) {
            console.log("Artist: ", record['artists'][0]['name']);
        } else {
            var artists = [];
            record['artists'].forEach(function(data) {
                artists.push(data.name);
            });
            console.log("Artists: ", artists.join(", "));
        }
    });
}