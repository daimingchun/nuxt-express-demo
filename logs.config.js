var log4js = require('log4js');

log4js.configure({

  appenders:{
    logInfo: {
      type: 'dateFile', // 文件输出
      filename: 'logs/access-', // 需要手动创建此文件夹
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true
      // maxLogSize: 1024,
      // backups: 4, // 日志备份数量，大于该数则自动删除 
    }
  },
  categories: {
    default: {
      appenders: ['logInfo'],
      level: 'info'
    }
  },
  replaceConsole: true
});

var levels = {
    'trace': log4js.levels.TRACE,
    'debug': log4js.levels.DEBUG,
    'info': log4js.levels.INFO,
    'warn': log4js.levels.WARN,
    'error': log4js.levels.ERROR,
    'fatal': log4js.levels.FATAL
};

 // 配合 express 使用的方法
const use = function (app, name) {
  app.use(log4js.connectLogger(log4js.getLogger('logInfo')
))
};

const logger = function (name, level) {
    var logger = log4js.getLogger(name);
    //logger.setLevel(levels[level] || levels['debug']);
    return logger;
};

export default {
  logger: logger,
  use: use
}