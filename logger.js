var logger = require('new-logger').createLogger('stdout.log');
exports.log = function(d, c) {
    c = c || 0;
    if (!c) {
        console.log(d);
    }
    logger.info(d);
}