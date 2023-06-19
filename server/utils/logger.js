const logger = require("pino");
const dayjs = require("dayjs");
const pretty = require("pino-pretty");


const stream = pretty({
  colorize: true,
});

const log = logger({
 stream,
  timestamp: () => `,"time":"${dayjs().format()}"`,
});
module.exports= log;
