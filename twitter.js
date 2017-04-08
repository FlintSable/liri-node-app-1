var keys = require('./keys.js');
var logger = require('./logger.js');
var twitter = require('twitter');
var client = new twitter(keys.twitterKeys);
exports.getTweets = function(userName, tweetCount) {
    tweetCount = tweetCount || 20;
    logger.log("making twitter api call");
    client.get('statuses/user_timeline', { screen_name: userName, count: tweetCount }, function(error, tweets, response) {
        error && logger.log('error: ' + error);
        tweets.forEach(function(tweet) {
            logger.log(tweet.text);
        });
    });
}