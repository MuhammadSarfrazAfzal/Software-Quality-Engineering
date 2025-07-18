
const { createLogger, format, transports} = require('winston');
const { combine, timestamp, label, printf } = format;

const logger = createLogger({
    level:'info',
    format:format.combine(
        label({label:'file logs'}),
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        printf(({ level, message, label, timestamp }) => {
            return `${timestamp} [${label}] ${level}: ${message}`;
          })
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename:'App.log'})
    ]
    
})

const ApiLogs = createLogger({
    level:'info',
    format:format.combine(
        label({label:'Api logs'}),
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        printf(({ level, message, label, timestamp }) => {
            return `${timestamp} [${label}] ${level}: ${message}`;
          })
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename:'Apilogs.log'})
    ]
    
})
module.exports = logger;
module.exports = ApiLogs;