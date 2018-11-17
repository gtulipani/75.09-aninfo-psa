'use strict';

var winston = require('winston');

var logConsoleLevel = 'debug';

var logFileLevel = 'trace';

var acegikLevels = {
  levels: {
    debug: 0,
    info: 1,
    trace: 2,
    warn: 3,
    error: 4
  },
  colors: {
    debug: 'blue',
    info: 'green',
    trace: 'yellow',
    warn: 'cyan',
    error: 'red'
  }
};

winston.addColors(acegikLevels.colors);

var logger = winston.createLogger({
    levels: acegikLevels.levels,
    transports: [
        new(winston.transports.Console)({
            json: false,
            timestamp: true,
            level: logConsoleLevel
        }),
        new winston.transports.File({
            filename: 'trace.log',
            json: false,
            level: logFileLevel
        })
    ],
    exceptionHandlers: [
        new(winston.transports.Console)({
            json: false,
            timestamp: true,
            level: logConsoleLevel
        }),
        new winston.transports.File({
            filename: 'error.log',
            json: false,
            level: logFileLevel
        })
    ],
    exitOnError: false
});

module.exports = logger;