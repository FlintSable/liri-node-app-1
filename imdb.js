var request = require('request');
exports.getMovies = function(title) {
    imdburl = "http://www.omdbapi.com/?t=" + title + "&plot=full";
    request.get(imdburl, function(err, response, movie) {
        if (err) {
            return console.error(err);
        }
        movie = JSON.parse(movie);
        if (movie.Response.toLowerCase() === 'false') {
            return console.log('No movies were found with name: ' + title + "!");
        } else {
            var tomatoRatings;
            for (var i = 0; i < movie.Ratings.length; i++) {
                if (movie.Ratings[i]["Source"] === "Rotten Tomatoes") {
                    tomatoRatings = movie.Ratings[i]["Value"];
                }
            }
            var output = "\nTitle: " + movie.Title + "\n" +
                "Year: " + movie.Year + "\n" +
                "IMDB Rating: " + movie.imdbRating + "\n" +
                "Country it was produced in: " + movie.Country + "\n" +
                "Language: " + movie.Language + "\n" +
                "Plot: " + movie.Plot + "\n" +
                "Actors: " + movie.Actors + "\n" +
                "Rotten Tomato Ratings: " + tomatoRatings + "\n";
            console.log(output);
        }
    });
}