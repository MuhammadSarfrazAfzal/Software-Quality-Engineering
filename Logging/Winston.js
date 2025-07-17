
const { createLogger, format, transports} = require('winston');

const logger = createLogger({
    level:'info',
    format:format.json(),
    transports: [
        new transports.Console(),
        new transports.File({filename:'App.log'})
    ]
    
})
module.exports = logger;