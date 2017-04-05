var keys = require('./keys.js');
var twitter = require('twitter');

var client = new twitter(keys.twitterKeys);

exports.getTweets = function(userName, tweetCount) {
    tweetCount = tweetCount || 20;
    console.log("making twitter api call");
    client.get('statuses/user_timeline', { screen_name: userName, count: tweetCount }, function(error, tweets, response) {
        error && console.log('error', error);
        tweets.forEach(function(tweet) {
            console.log('tweet', tweet.text);
        });
        // console.log('tweet', tweets);
        // console.log('response', response);
    });
}