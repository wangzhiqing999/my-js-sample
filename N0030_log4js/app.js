var log4js = require('log4js');
log4js.configure('./config/log4js.json');


var log = log4js.getLogger("app");
log.debug("This is a log4js debug test...");
log.info("This is a log4js info test...");
log.warn("This is a log4js warn test...");
log.error("This is a log4js error test...");



var log2 = log4js.getLogger("myTestService");
log2.debug("myTestService Start.");
log2.debug("myTestService Finish.");