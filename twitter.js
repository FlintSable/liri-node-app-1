var t = require('twitter');

var client = new t({
    consumer_key: 'N8bEmdYRJkGpJkt2jW69lQEN8',
    consumer_secret: 'vR5RrhdGzltIJSabjQ0oZEfGClzOmWzdp1BahIwjwkopaFVRxz',
    access_token_key: '2472398990-nxfgG8YwDOdvKSaPDVuNe3fW4XfAdE8x8r1zcx2',
    access_token_secret: 'F5l7NiVUHJnKiD1Ba8M9TG18xpdkWAYPCuP29fLrz0Khg'
});

//client.get('statuses/user_timeline', { user_id: '_rutulpatel', count: 5 }, function(error, tweets, response) {
client.get('statuses/user_timeline', { user_id: 'patelarpith', screen_name: 'patelarpith', count: 5 }, function(error, tweets, response) {
    error && console.log('error', error);
    tweets.forEach(function(tweet) {
        console.log('tweet', tweet.text);
    });
    // console.log('tweet', tweets);
    // console.log('response', response);
});